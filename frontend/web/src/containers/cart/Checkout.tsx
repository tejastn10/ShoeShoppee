// React
import { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// UI Library
import { Card, PageHeader, Steps } from "antd";

// Custom Components
import { Shipping } from "./Shipping";
import { Payment } from "./Payment";
import { PlaceOrder } from "./PlaceOrder";

// Custom Hooks
import { useCart } from "../../hooks";

const { Step } = Steps;

export const Checkout: FC = () => {
  const [current, setCurrent] = useState(0);
  const history = useHistory();

  const { cartState } = useCart();

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  useEffect(() => {
    if (cartState.totalItems === 0) {
      history.push("/cart");
    }
  }, [cartState.totalItems, history]);

  const steps = [
    { title: "Shipping Address", content: <Shipping next={next} /> },
    { title: "Payment", content: <Payment prev={prev} next={next} /> },
    { title: "Place Order", content: <PlaceOrder prev={prev} /> },
  ];

  return (
    <div className="container">
      <Card>
        <PageHeader>
          <Steps current={current} progressDot>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
        </PageHeader>
      </Card>
      <Card>
        <div className="steps-content">{steps[current].content}</div>
      </Card>
    </div>
  );
};
