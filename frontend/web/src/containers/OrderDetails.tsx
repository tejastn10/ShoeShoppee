import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

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
import { ShoppingCartOutlined } from "@ant-design/icons";

import { OrderItem } from "../components/OrderItem";
import { CartSummary } from "../components/CartSummary";

import { OrderState } from "../store/@types";
import { ApplicationState } from "../store/store";

interface OrderPramas {
  id: string;
}

export const OrderDetails = () => {
  const { id }: OrderPramas = useParams();
  const history = useHistory();

  const orderState = useSelector<ApplicationState, OrderState>(
    (state) => state.orders
  );
  const { orders } = orderState;

  if (orders === null) {
    return (
      <Card>
        <PageHeader
          title="Order Not Found !!"
          extra={[
            <Button key="2" onClick={() => history.push("/")}>
              <ShoppingCartOutlined />
              Continue Shopping
            </Button>,
          ]}
        />
        <div className="empty">
          {message.error("Order Not Found")}
          <Empty />
        </div>
      </Card>
    );
  }

  const order = orders!.find((order) => order._id === id);

  const price = {
    itemsPrice: order!.itemsPrice,
    shippingPrice: order!.shippingPrice,
    taxPrice: order!.taxPrice,
    totalPrice: order!.totalPrice,
  };

  return (
    <Card>
      <Card>
        <PageHeader
          title="Your Order"
          tags={[
            order!.isPaid ? (
              <Tag color="green" key="1">
                Payment Done
              </Tag>
            ) : (
              <Tag color="red" key="1">
                Payment not done
              </Tag>
            ),
            order!.isDelivered ? (
              <Tag color="green" key="0">
                Delivered
              </Tag>
            ) : (
              <Tag color="yellow" key="0">
                Delivery Pending
              </Tag>
            ),
          ]}
          extra={[
            <Button key="2" onClick={() => history.push("/")}>
              <ShoppingCartOutlined />
              Continue Shopping
            </Button>,
          ]}
        />
      </Card>
      <Row>
        <Col span={18}>
          <Card bordered={false}>
            <Divider orientation="left">Order Details</Divider>
            <Descriptions size="small" column={1}>
              <Descriptions.Item label="Order Id">
                {order!._id}
              </Descriptions.Item>
            </Descriptions>
            <Divider orientation="left">Shipping Address</Divider>
            <Descriptions size="small" column={1}>
              <Descriptions.Item label="Address">
                {order!.shippingAddress.address}
              </Descriptions.Item>
              <Descriptions.Item label="City">
                {order!.shippingAddress.city}
              </Descriptions.Item>
              <Descriptions.Item label="PinCode">
                {order!.shippingAddress.pincode}
              </Descriptions.Item>
              <Descriptions.Item label="State">
                {order!.shippingAddress.state}
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
                  value={order!.paymentMethod}
                />
              </Descriptions.Item>
            </Descriptions>
            <Divider />
            <Card title="List Items" bordered={false}>
              {order!.orderItems.map((item) => {
                return <OrderItem item={item} key={item.id} />;
              })}
            </Card>
          </Card>
        </Col>
        <Col span={6}>
          <CartSummary totalItems={order!.totalItems} price={price} />
        </Col>
      </Row>
    </Card>
  );
};
