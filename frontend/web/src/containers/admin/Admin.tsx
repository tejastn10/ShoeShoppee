// React
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// UI Library
import {
  message,
  Button,
  Card,
  InputNumber,
  PageHeader,
  Popconfirm,
  Table,
  Tag,
} from "antd";
import {
  DeleteOutlined,
  SwapOutlined,
  PlusOutlined,
  ReloadOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

// Redux
import { ApplicationState } from "../../store/store";
import {
  getUserListRequest,
  userDeleteRequest,
  updatePrivilegeRequest,
  getProductListRequest,
  clearProductList,
  productDeleteRequest,
  updateProductRequest,
  getOrderListRequest,
  clearAdminError,
} from "../../store/actions/actions";

// Custom Components
import { Loading } from "../../components/Loading";
import { ProductForm } from "./ProductForm";

// Custom Types
import { ProductListState } from "../../store/@types";
import { useAuth } from "../../hooks/useAuth";
import { useAdmin } from "../../hooks/useAdmin";

export const Admin: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const [Count, setCount] = useState(null);
  const [Price, setPrice] = useState(null);
  const { authState } = useAuth();
  const { adminState } = useAdmin();
  const productList = useSelector<ApplicationState, ProductListState>(
    (state) => state.productList
  );
  const { isLoading, errors, messages, users, orders } = adminState;

  const deleteUser = (id: string) => {
    if (id) {
      dispatch(userDeleteRequest(id));
    }
  };

  const updateUser = ({ _id, isAdmin }: any) => {
    if (_id) {
      dispatch(updatePrivilegeRequest({ id: _id, isAdmin: !isAdmin }));
    }
  };

  const deleteProduct = (id: string) => {
    dispatch(productDeleteRequest(id));
    dispatch(clearProductList());
  };

  const updateProduct = ({ id, count, price }: any) => {
    dispatch(updateProductRequest({ id, count, price }));
    dispatch(clearProductList());
    setCount(null);
    setPrice(null);
  };

  const productColumns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Brand",
      dataIndex: "brand",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (price: number) => {
        return (
          <InputNumber
            defaultValue={price}
            onChange={(value: any) => setPrice(value)}
          />
        );
      },
    },
    {
      title: "In Stock",
      dataIndex: "count",
      render: (count: number) => {
        return count > 0 ? (
          <Tag color="green" key="1">
            Yes
          </Tag>
        ) : (
          <Tag color="red" key="1">
            No
          </Tag>
        );
      },
    },
    {
      title: "Stock",
      dataIndex: "count",
      render: (count: number) => {
        return (
          <InputNumber
            defaultValue={count}
            onChange={(value: any) => setCount(value)}
          />
        );
      },
    },
    {
      title: "Update Product",
      render: ({ _id, count, price }: any) => {
        return (
          <Popconfirm
            title="Are you sure？"
            onConfirm={() =>
              updateProduct({
                id: _id,
                count: Count ? Count : count,
                price: Price ? Price : price,
              })
            }
            okText="Yes"
            cancelText="No"
          >
            <Button>
              <ReloadOutlined />
              Update
            </Button>
          </Popconfirm>
        );
      },
    },
    {
      title: "Delete Product",
      render: ({ _id }: any) => {
        return (
          <Popconfirm
            title="Are you sure to delete this product?"
            icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            onConfirm={() => deleteProduct(_id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
              Delete
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        );
      },
    },
  ];

  const userColumns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Admin",
      dataIndex: "isAdmin",
      render: (isAdmin: boolean) => {
        return isAdmin ? (
          <Tag color="green" key="1">
            Admin
          </Tag>
        ) : (
          <Tag color="red" key="1">
            Not Admin
          </Tag>
        );
      },
    },
    {
      title: "Toggle Privileges",
      render: ({ _id, isAdmin }: any) => {
        return (
          <Popconfirm
            title="Change privileges of the user?"
            onConfirm={() => updateUser({ _id, isAdmin })}
            okText="Yes"
            cancelText="No"
          >
            <Button>
              <SwapOutlined />
              Toggle
            </Button>
          </Popconfirm>
        );
      },
    },
    {
      title: "Delete User",
      render: ({ _id }: any) => {
        return (
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => deleteUser(_id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
              Delete
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        );
      },
    },
  ];

  const orderColumns = [
    {
      title: "OrderID",
      dataIndex: "_id",
    },
    {
      title: "Payment",
      dataIndex: "isPaid",
      render: (isPaid: boolean) => {
        return isPaid ? (
          <Tag color="green" key="1">
            Paid
          </Tag>
        ) : (
          <Tag color="red" key="1">
            Not Paid
          </Tag>
        );
      },
    },
    {
      title: "Delivered",
      dataIndex: "isDelivered",
      render: (isDelivered: boolean) => {
        return isDelivered ? (
          <Tag color="green" key="0">
            Delivered
          </Tag>
        ) : (
          <Tag color="yellow" key="0">
            Not Delivered
          </Tag>
        );
      },
    },
    {
      title: "Total Items",
      dataIndex: "totalItems",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
    },
    {
      title: "Order Details",
      render: ({ _id }: any) => {
        return (
          <Button onClick={() => history.push(`orders/${_id}`)}>
            View Details
          </Button>
        );
      },
    },
  ];

  useEffect(() => {
    if (authState.auth?.isAdmin) {
      dispatch(getUserListRequest());
    } else {
      history.push("/");
    }
  }, [authState.auth?.isAdmin, dispatch, history]);

  useEffect(() => {
    if (!productList.products) {
      dispatch(getProductListRequest());
    }
  }, [dispatch, productList.products]);

  useEffect(() => {
    if (!orders) {
      dispatch(getOrderListRequest());
    }
  }, [dispatch, orders]);

  useEffect(() => {
    if (errors.results) {
      message.error(errors.results.message);
      dispatch(clearAdminError());
      history.push("/");
    }
  }, [dispatch, errors.results, history]);

  useEffect(() => {
    if (messages.message) {
      message.success(messages.message);
    }
  }, [messages.message]);

  return (
    <div className="container">
      <Card>
        <PageHeader
          className="site-page-header"
          onBack={() => history.goBack()}
          title="Admin Panel"
          extra={
            <Button onClick={() => setVisible(!visible)}>
              <PlusOutlined />
              Add New Product
            </Button>
          }
        />
      </Card>
      <Card>
        <ProductForm visible={visible} setVisible={setVisible} />
        <Card title="All Users">
          {isLoading ? (
            <Loading />
          ) : (
            <Table
              columns={userColumns}
              dataSource={users!}
              rowKey={(user) => user._id}
            />
          )}
        </Card>
        <Card title="All Products">
          {isLoading ? (
            <Loading />
          ) : (
            <Table
              columns={productColumns}
              dataSource={productList.products!}
              rowKey={(product) => product._id!}
            />
          )}
        </Card>
        <Card title="All Orders">
          {isLoading ? (
            <Loading />
          ) : (
            <Table
              columns={orderColumns}
              dataSource={orders!}
              rowKey={(order) => order._id!}
            />
          )}
        </Card>
      </Card>
    </div>
  );
};
