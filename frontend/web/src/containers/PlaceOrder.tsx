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
  Tag,
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
  const { totalItems, shippingAddress, paymentMethod, cartList, price } = cart;

  return (
    <Card>
      <PageHeader
        title="Order Summary"
        tags={<Tag color="green">Transaction in process...</Tag>}
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
            {shippingAddress!.address}
          </Descriptions.Item>
          <Descriptions.Item label="City">
            {shippingAddress!.city}
          </Descriptions.Item>
          <Descriptions.Item label="PinCode">
            {shippingAddress!.pincode}
          </Descriptions.Item>
          <Descriptions.Item label="State">
            {shippingAddress!.state}
          </Descriptions.Item>
        </Descriptions>
        <Divider orientation="left">Payment</Divider>
        <Descriptions size="small" column={2}>
          <Descriptions.Item>
            <Statistic title="Status" value="Pending" />
          </Descriptions.Item>
          <Descriptions.Item>
            <Statistic title="Payment Method" value={paymentMethod} />
          </Descriptions.Item>
        </Descriptions>
        <Divider />
        <Row>
          <Col span={18}>
            <Card title="List Items" bordered={false}>
              {cartList!.map((item) => {
                return <OrderItem item={item} key={item.id} />;
              })}
            </Card>
          </Col>
          <Col span={6}>
            <CartSummary totalItems={totalItems} price={price!} />
          </Col>
        </Row>
      </PageHeader>
    </Card>
  );
};
