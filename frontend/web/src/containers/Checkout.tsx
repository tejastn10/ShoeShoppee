import { useState } from "react";

import { Card, PageHeader, Steps } from "antd";

import { Shipping } from "./Shipping";
import { Payment } from "./Payment";
import { PlaceOrder } from "./PlaceOrder";

const { Step } = Steps;

export const Checkout = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    { title: "Shipping Address", content: <Shipping next={next} /> },
    { title: "Payment", content: <Payment prev={prev} next={next} /> },
    { title: "Place Order", content: <PlaceOrder prev={prev} /> },
  ];

  return (
    <>
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
    </>
  );
};
