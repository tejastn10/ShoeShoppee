import { Col, Card } from "antd";
import React from "react";
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
          <Card.Meta
            description={
              <Rating rating={product.rating} reviews={product.numReviews} />
            }
          />
          <Card.Meta description={product.category} />
          <p></p>
          <Card.Meta title={`PRICE: ₹ ${product.price}`} />
        </Card>
      </Link>
    </Col>
  );
};
