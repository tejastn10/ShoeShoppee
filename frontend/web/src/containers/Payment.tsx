import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card, Radio, Button, message } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { RadioChangeEvent } from "antd/lib/radio";

import { ApplicationState } from "../store/store";
import { CartState } from "../store/@types";
import { savePaymentMethod } from "../store/actions/cart";

type PaymentProps = {
  prev: () => void;
  next: () => void;
};

export const Payment = ({ prev, next }: PaymentProps) => {
  const cartState = useSelector<ApplicationState, CartState>(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const { paymentMethod } = cartState;
  const [payment, setPayment] = useState(paymentMethod);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setPayment(e.target.value);
  };

  const onSubmit = () => {
    message.warning("Please check your details before confirming order!");
    dispatch(savePaymentMethod(payment));
    next();
  };

  return (
    <Card className="shipping" title="Select Payment Method">
      <Radio.Group onChange={onChange} value={payment} className="payment">
        <Radio value={"PayPal"}>PayPal or Card</Radio>
        <Radio value={"UPI"}>UPI</Radio>
        <Radio value={"Cash"}>Cash</Radio>
      </Radio.Group>
      <Button type="primary" onClick={onSubmit}>
        <ArrowRightOutlined />
        Next
      </Button>
      <Button style={{ margin: "0 8px" }} onClick={prev}>
        <ArrowLeftOutlined />
        Previous
      </Button>
    </Card>
  );
};
