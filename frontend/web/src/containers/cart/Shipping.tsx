// React
import { FC, useState } from "react";
import { useDispatch } from "react-redux";

// UI Library
import { Card, Form, Input, Button } from "antd";
import { HomeOutlined, ArrowRightOutlined } from "@ant-design/icons";

// Redux
import { saveAddress } from "../../store/actions/actions";

// Custom Types
import { useCart } from "../../hooks/useCart";
type Address = {
  address: string;
  city: string;
  state: string;
  pincode: string;
};
type Props = {
  next: () => void;
};

export const Shipping: FC<Props> = ({ next }: Props) => {
  const { cartState } = useCart();
  const dispatch = useDispatch();

  const { shippingAddress } = cartState;
  const [address] = useState(shippingAddress ? shippingAddress.address : "");
  const [city] = useState(shippingAddress ? shippingAddress.city : "");
  const [state] = useState(shippingAddress ? shippingAddress.state : "");
  const [pincode] = useState(shippingAddress ? shippingAddress.pincode : "");

  const onFinish = (fullAddress: Address) => {
    dispatch(saveAddress(fullAddress));
    next();
  };

  return (
    <Card className="shipping" title={<HomeOutlined />}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          address: `${address}`,
          city: `${city}`,
          state: `${state}`,
          pincode: `${pincode}`,
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="address"
          rules={[{ required: true, message: "Please enter your address" }]}
        >
          <Input placeholder="Address" />
        </Form.Item>
        <Form.Item
          name="city"
          rules={[
            {
              required: true,
              message: "Please input your city",
            },
          ]}
        >
          <Input placeholder="City" />
        </Form.Item>
        <Form.Item
          name="state"
          rules={[
            {
              required: true,
              message: "Please input your State",
            },
          ]}
        >
          <Input placeholder="State" />
        </Form.Item>
        <Form.Item
          name="pincode"
          rules={[
            {
              required: true,
              message: "Please input your Pin-Code",
            },
          ]}
        >
          <Input placeholder="PinCode" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            <ArrowRightOutlined />
            Next
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
