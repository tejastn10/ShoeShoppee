import { Col, Card, Statistic } from "antd";
import { Link } from "react-router-dom";

import { Product } from "../store/@types";

import { Rating } from "./Rating";

type CardProps = {
  product: Product;
};

export const CardItem = ({ product }: CardProps) => {
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
