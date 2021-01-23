import { Link } from "react-router-dom";

import { Button, Card, Col, Row, Select, Image, Statistic } from "antd";
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
      <Row style={{ paddingBottom: "0" }}>
        <Col span={4}>
          <Card bordered={false}>
            <Image src={image} preview={false} style={{ height: "14rem" }} />
          </Card>
        </Col>
        <Col span={20}>
          <Card bordered={false}>
            <Link to={`/product/${id}`}>
              <Statistic title="Name" value={name} />
              <Statistic title="Price" prefix="₹" value={price} />
            </Link>
            <div>Quantity</div>
            <p></p>
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
              danger
              onClick={() => removeFromCart(item.id)}
            >
              <DeleteRowOutlined />
              Remove Product
            </Button>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};
