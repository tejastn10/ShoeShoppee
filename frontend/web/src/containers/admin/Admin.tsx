import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

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

import { AdminState, AuthState, ProductListState } from "../../store/@types";
import {
  getUserListRequest,
  userDeleteRequest,
  updatePrivilegeRequest,
  getProductListRequest,
  clearProductList,
  productDeleteRequest,
  updateProductRequest,
} from "../../store/actions/actions";
import { ApplicationState } from "../../store/store";

import { Loading } from "../../components/Loading";
import { ProductForm } from "./ProductForm";

export const Admin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const [Count, setCount] = useState(null);
  const [Price, setPrice] = useState(null);
  const adminState = useSelector<ApplicationState, AdminState>(
    (state) => state.admin
  );
  const authState = useSelector<ApplicationState, AuthState>(
    (state) => state.authState
  );
  const productList = useSelector<ApplicationState, ProductListState>(
    (state) => state.productList
  );
  const { isLoading, errors, messages, users } = adminState;

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

  const productsColumn = [
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

  useEffect(() => {
    if (authState.auth?.isAdmin) {
      dispatch(getUserListRequest());
    } else {
      history.push("/");
    }

    if (!productList.products) {
      dispatch(getProductListRequest());
    }

    if (errors.results) {
      message.error(errors.results.message);
      history.push("/");
    }

    if (messages.message) {
      message.success(messages.message);
    }
  }, [
    authState.auth?.isAdmin,
    dispatch,
    errors.results,
    history,
    messages.message,
    productList.products,
  ]);

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
              columns={productsColumn}
              dataSource={productList.products!}
              rowKey={(product) => product._id!}
            />
          )}
        </Card>
      </Card>
    </div>
  );
};
