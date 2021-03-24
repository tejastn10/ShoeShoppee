// React
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// UI Library
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

// Redux
import {
  createOrderRequest,
  resetOrder,
  emptyCart,
  clearOrdersError,
} from "../../store/actions/actions";

// Custom Components
import { CartSummary } from "../../components/CartSummary";
import { OrderItem } from "../../components/OrderItem";

// Custom Types
import { useCart } from "../../hooks/useCart";
import { useOrder } from "../../hooks/useOrder";
type Props = {
  prev: () => void;
};

export const PlaceOrder: FC<Props> = ({ prev }: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { cartState } = useCart();
  const {
    totalItems,
    shippingAddress,
    paymentMethod,
    cartList,
    price,
  } = cartState;

  const { orderState } = useOrder();
  const { success, errors, orders } = orderState;

  const placeOrder = () => {
    dispatch(
      createOrderRequest({
        orderItems: cartList,
        totalItems,
        shippingAddress,
        paymentMethod,
        itemsPrice: price?.itemsPrice,
        taxPrice: price?.taxPrice,
        shippingPrice: price?.shippingPrice,
        totalPrice: price?.totalPrice,
      })
    );
  };

  useEffect(() => {
    if (success) {
      message.success("Order Placed Succesfully");
      dispatch(resetOrder());
      dispatch(emptyCart());
      history.push(`orders/${orders![orders!.length - 1]._id}`);
    }
    if (errors.results !== null) {
      message.error(orderState.errors.results);
      dispatch(clearOrdersError());
    }
  }, [
    dispatch,
    errors.results,
    history,
    orderState.errors.results,
    orders,
    success,
  ]);

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
          <Button key="1" type="primary" onClick={placeOrder}>
            Place Order
            <CheckCircleOutlined />
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
