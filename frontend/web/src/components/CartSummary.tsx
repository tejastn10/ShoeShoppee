// React
import { FC } from "react";

// UI Library
import { Card, Statistic } from "antd";

// Custom Types
import { PriceSummary } from "../store/@types";
type Props = {
  totalItems: number;
  price: PriceSummary;
};

export const CartSummary: FC<Props> = ({ totalItems, price }: Props) => {
  return (
    <>
      <Card type="inner" bordered={false}>
        <Card.Grid hoverable={false}>
          <Statistic title="Total Items" value={totalItems} />
        </Card.Grid>
        <Card.Grid hoverable={false}>
          <Statistic
            title="Price"
            prefix="₹"
            value={price ? price.itemsPrice : 0}
          />
        </Card.Grid>
        <Card.Grid hoverable={false}>
          <Statistic
            title="Tax"
            prefix="₹"
            value={price ? price.taxPrice : 0}
          />
        </Card.Grid>
        <Card.Grid hoverable={false}>
          <Statistic
            title="Shipping Charges"
            prefix="₹"
            value={price ? price.shippingPrice : 0}
          />
        </Card.Grid>
      </Card>
      <Card title="Total Price">
        <Card.Grid>
          <Statistic prefix="₹" value={price ? price.totalPrice : 0} />
        </Card.Grid>
      </Card>
    </>
  );
};
