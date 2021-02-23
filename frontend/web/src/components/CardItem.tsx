// React
import { FC } from "react";
import { Link } from "react-router-dom";

// UI Library
import { Col, Card, Statistic } from "antd";

// Custom Components
import { Rating } from "./Rating";

// Custom Types
import { Product } from "../store/@types";
type Props = {
  product: Product;
};

export const CardItem: FC<Props> = ({ product }: Props) => {
  return (
    <Col className="gutter-row" span={6}>
      <Link to={`/product/${product._id}`}>
        <Card
          className="card"
          hoverable
          title={product.name}
          cover={<img alt="example" src={product.image} />}
        >
          <Statistic title="Category" value={product.category} />
          <Statistic title="Price" prefix="₹" value={product.price} />
          <Rating rating={product.rating} reviews={product.numReviews} />
        </Card>
      </Link>
    </Col>
  );
};
