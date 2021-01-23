import { Card, Statistic } from "antd";

import { CartItem } from "../store/@types";

type SummaryProps = {
  list: CartItem[];
};

export const CartSummary = ({ list }: SummaryProps) => {
  return (
    <>
      <Card type="inner" bordered={false}>
        <Card.Grid hoverable={false}>
          <Statistic
            title="Total Items"
            value={list.reduce((acc, item) => acc + item.qty, 0)}
          />
        </Card.Grid>
        <Card.Grid hoverable={false}>
          <Statistic
            title="Price"
            prefix="₹"
            value={list.reduce((acc, item) => acc + item.qty * item.price, 0)}
          />
        </Card.Grid>
        <Card.Grid hoverable={false}>
          <Statistic
            title="Tax"
            prefix="₹"
            value={list.reduce((acc, item) => acc + item.qty * 50, 0)}
          />
        </Card.Grid>
        <Card.Grid hoverable={false}>
          <Statistic
            title="Shipping Charges"
            prefix="₹"
            value={list.reduce((acc, item) => acc + item.qty * 10, 0)}
          />
        </Card.Grid>
      </Card>
      <Card title="Total Price">
        <Card.Grid>
          <Statistic
            prefix="₹"
            value={list.reduce(
              (acc, item) =>
                acc + item.qty * item.price + item.qty * 50 + item.qty * 10,
              0
            )}
          />
        </Card.Grid>
      </Card>
    </>
  );
};
