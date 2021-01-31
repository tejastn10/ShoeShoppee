import { useSelector } from "react-redux";

import {
  Button,
  message,
  Card,
  PageHeader,
  Descriptions,
  Divider,
  Statistic,
  Row,
  Col,
} from "antd";
import { ArrowLeftOutlined, CheckCircleOutlined } from "@ant-design/icons";

import { CartSummary } from "../components/CartSummary";
import { OrderItem } from "../components/OrderItem";

import { CartState } from "../store/@types";
import { ApplicationState } from "../store/store";

type PlaceOrderProps = {
  prev: () => void;
};

export const PlaceOrder = ({ prev }: PlaceOrderProps) => {
  const cart = useSelector<ApplicationState, CartState>((state) => state.cart);

  return (
    <Card>
      <PageHeader
        title="Order Summary"
        extra={[
          <Button key="2" onClick={prev}>
            <ArrowLeftOutlined />
            Previous
          </Button>,
          <Button
            key="1"
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            <CheckCircleOutlined />
            Place Order
          </Button>,
        ]}
      >
        <Divider orientation="left">Shipping Address</Divider>
        <Descriptions size="small" column={1}>
          <Descriptions.Item label="Address">
            {cart.shippingAddress?.address}
          </Descriptions.Item>
          <Descriptions.Item label="City">
            {cart.shippingAddress?.city}
          </Descriptions.Item>
          <Descriptions.Item label="PinCode">
            {cart.shippingAddress?.pincode}
          </Descriptions.Item>
          <Descriptions.Item label="State">
            {cart.shippingAddress?.state}
          </Descriptions.Item>
        </Descriptions>
        <Divider orientation="left">Payment</Divider>
        <Descriptions size="small" column={2}>
          <Descriptions.Item>
            <Statistic title="Status" value="Pending" />
          </Descriptions.Item>
          <Descriptions.Item>
            <Statistic title="Payment Method" value={cart.paymentMethod} />
          </Descriptions.Item>
        </Descriptions>
        <Divider />
        <Row>
          <Col span={18}>
            <Card title="List Items" bordered={false}>
              {cart.cartList!.map((item) => {
                return <OrderItem item={item} key={item.id} />;
              })}
            </Card>
          </Col>
          <Col span={6}>
            <CartSummary list={cart.cartList!} />
          </Col>
        </Row>
      </PageHeader>
    </Card>
  );
};
