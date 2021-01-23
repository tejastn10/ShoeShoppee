import { Link } from "react-router-dom";

import { Button, Card, Col, Row, Select, Image } from "antd";
import { DeleteRowOutlined } from "@ant-design/icons";

import { CartItem as item } from "../store/@types";

const { Option } = Select;

type CartProps = {
  item: any;
  removeFromCart: (id: string) => void;
  addToCart: ({ id, name, image, price, count, qty }: item) => void;
};

export const CartItem = ({ item, removeFromCart, addToCart }: CartProps) => {
  const { id, name, image, price, count, qty } = item;

  return (
    <Card>
      <Row>
        <Col span={6}>
          <Card bordered={false}>
            <Image src={image} preview={false} style={{ height: "10rem" }} />
          </Card>
        </Col>
        <Col span={18}>
          <Card bordered={false}>
            <Link to={`/product/${id}`}>
              <h2>{name}</h2>
              <h2>PRICE: ₹ {price}</h2>
            </Link>
            <>
              <Select
                value={qty}
                style={{ width: 60 }}
                onChange={(num) =>
                  addToCart({ id, name, image, price, count, qty: num })
                }
              >
                {[...Array(item.count).keys()].map((c) => (
                  <Option value={c + 1}>{c + 1}</Option>
                ))}
              </Select>

              <Button
                className="cart-btn"
                type="primary"
                onClick={() => removeFromCart(item.id)}
              >
                <DeleteRowOutlined />
                Remove From Cart
              </Button>
            </>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};
