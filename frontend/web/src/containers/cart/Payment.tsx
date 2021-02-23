// React
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// UI Library
import { Card, Radio, Button, message } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { RadioChangeEvent } from "antd/lib/radio";

// Redux
import { ApplicationState } from "../../store/store";
import { savePaymentMethod } from "../../store/actions/actions";

// Custom Types
import { CartState } from "../../store/@types";
type Props = {
  prev: () => void;
  next: () => void;
};

export const Payment: FC<Props> = ({ prev, next }: Props) => {
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
