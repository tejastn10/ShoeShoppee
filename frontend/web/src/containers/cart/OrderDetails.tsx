// React
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

// UI Library
import {
  Card,
  Button,
  PageHeader,
  Descriptions,
  Divider,
  Statistic,
  Row,
  Col,
  Tag,
  Empty,
  message,
} from "antd";
import {
  ArrowLeftOutlined,
  CheckOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

// Redux
import { ApplicationState } from "../../store/store";
import {
  clearOrdersError,
  orderRequest,
  updateOrderRequest,
} from "../../store/actions/actions";

// Custom Components
import { OrderItem } from "../../components/OrderItem";
import { CartSummary } from "../../components/CartSummary";
import { Loading } from "../../components/Loading";

// Custom Types
import {
  OrderState,
  Order,
  PriceSummary,
  Profile,
  AdminState,
} from "../../store/@types";
import { useAuth } from "../../hooks/useAuth";
import { useAdmin } from "../../hooks/useAdmin";
interface OrderParams {
  id: string;
}
interface OrderDetail {
  order: Order;
  price: PriceSummary;
  admin?: boolean;
  user: Profile;
}

export const OrderDetails: FC = () => {
  const { id }: OrderParams = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const { authState } = useAuth();

  const { adminState } = useAdmin();

  const orderState = useSelector<ApplicationState, OrderState>(
    (state) => state.orders
  );

  if (!authState.auth?._id) {
    history.push("/");
  }

  const { order, isLoading, errors } = orderState;
  const { messages } = adminState;

  useEffect(() => {
    dispatch(orderRequest(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (errors.results) {
      message.error(errors.results.message);
      dispatch(clearOrdersError());
    }
  }, [dispatch, errors.results]);

  useEffect(() => {
    if (messages.message) {
      message.success(messages.message);
    }
  }, [messages.message]);

  const EmptyOrder = () => (
    <div className="container">
      <Card>
        <PageHeader
          title="Order Not Found !!"
          extra={
            authState.auth?.isAdmin ? (
              [
                <Button key="2" onClick={() => history.goBack()}>
                  <ArrowLeftOutlined />
                  Go Back
                </Button>,
              ]
            ) : (
              <Button key="2" onClick={() => history.push("/")}>
                <ShoppingCartOutlined />
                Continue Shopping
              </Button>
            )
          }
        />
        <div className="empty">
          <Empty />
        </div>
      </Card>
    </div>
  );

  const OrderDetail = ({ order, price, admin, user }: OrderDetail) => (
    <div className="container">
      <Card>
        <PageHeader
          title={`Order ID: ${order._id}`}
          tags={[
            order.isPaid ? (
              <Tag color="green" key="1">
                Payment Done
              </Tag>
            ) : (
              <Tag color="red" key="1">
                Payment not done
              </Tag>
            ),
            order.isDelivered ? (
              <Tag color="green" key="0">
                Delivered
              </Tag>
            ) : (
              <Tag color="yellow" key="0">
                Delivery Pending
              </Tag>
            ),
          ]}
          extra={
            authState.auth?.isAdmin
              ? [
                  <Button
                    key="2"
                    disabled={order.isDelivered === true}
                    onClick={() => dispatch(updateOrderRequest(id))}
                  >
                    <CheckOutlined />
                    Mark as Paid & Delivered
                  </Button>,
                ]
              : [
                  <Button key="2" onClick={() => history.push("/")}>
                    <ShoppingCartOutlined />
                    Continue Shopping
                  </Button>,
                ]
          }
        />
      </Card>
      <Card>
        <Row>
          <Col span={18}>
            <Card bordered={false}>
              <Divider orientation="left">User Details</Divider>
              <Descriptions size="small" column={1}>
                <Descriptions.Item label="Username">
                  {user.name}
                </Descriptions.Item>
                <Descriptions.Item label="Email">
                  {user.email}
                </Descriptions.Item>
              </Descriptions>
              <Divider orientation="left">Order Details</Divider>
              <Descriptions size="small" column={1}>
                <Descriptions.Item label="Order Id">
                  {order._id}
                </Descriptions.Item>
              </Descriptions>
              <Divider orientation="left">Shipping Address</Divider>
              <Descriptions size="small" column={1}>
                <Descriptions.Item label="Address">
                  {order.shippingAddress.address}
                </Descriptions.Item>
                <Descriptions.Item label="City">
                  {order.shippingAddress.city}
                </Descriptions.Item>
                <Descriptions.Item label="PinCode">
                  {order.shippingAddress.pincode}
                </Descriptions.Item>
                <Descriptions.Item label="State">
                  {order.shippingAddress.state}
                </Descriptions.Item>
              </Descriptions>
              <Divider orientation="left">Payment</Divider>
              <Descriptions size="small" column={2}>
                <Descriptions.Item>
                  <Statistic title="Status" value="Pending" />
                </Descriptions.Item>
                <Descriptions.Item>
                  <Statistic
                    title="Payment Method"
                    value={order.paymentMethod}
                  />
                </Descriptions.Item>
              </Descriptions>
              <Divider />
              <Card title="List Items" bordered={false}>
                {order.orderItems.map((item) => {
                  return <OrderItem item={item} key={item.id} />;
                })}
              </Card>
            </Card>
          </Col>
          <Col span={6}>
            <CartSummary totalItems={order.totalItems} price={price} />
          </Col>
        </Row>
      </Card>
    </div>
  );

  if (isLoading) {
    return <Loading />;
  } else if (order !== null) {
    const price = {
      itemsPrice: order!.itemsPrice,
      shippingPrice: order!.shippingPrice,
      taxPrice: order!.taxPrice,
      totalPrice: order!.totalPrice,
    };
    if (authState.auth?.isAdmin) {
      return (
        <OrderDetail order={order} price={price} user={order.user!} admin />
      );
    } else {
      return <OrderDetail order={order} price={price} user={order.user!} />;
    }
  } else {
    return <EmptyOrder />;
  }
};
