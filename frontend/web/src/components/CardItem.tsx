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
          cover={<img alt="example" src={product.image} />}
        >
          <Card.Meta title={product.name} description="Rating" />
          <Rating rating={product.rating} reviews={product.numReviews} />
          <h2>₹ {product.price}</h2>
        </Card>
      </Link>
    </Col>
  );
};
