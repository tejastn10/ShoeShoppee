// React
import { FC } from "react";
import { Link } from "react-router-dom";

// UI Library
import { Button, Card, Col, Row, Image, Statistic, InputNumber } from "antd";
import { DeleteRowOutlined } from "@ant-design/icons";

// Custom Types
import { CartItem as item } from "../store/@types";
type Props = {
  item: any;
  removeFromCart?: (id: string) => void;
  addToCart?: ({ id, name, image, price, count, qty }: item) => void;
};

export const OrderItem: FC<Props> = ({
  item,
  removeFromCart,
  addToCart,
}: Props) => {
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
            {addToCart && removeFromCart ? (
              <>
                <div>Quantity</div>
                <p></p>
                <InputNumber
                  defaultValue={qty}
                  min={1}
                  max={item.count}
                  onChange={(num: any) =>
                    addToCart({ id, name, image, price, count, qty: num })
                  }
                  disabled={item.count === 0 ? true : false}
                />
                <Button
                  className="cart-btn"
                  danger
                  onClick={() => removeFromCart(item.id)}
                >
                  <DeleteRowOutlined />
                  Remove Product
                </Button>
              </>
            ) : (
              <>
                <div>Quantity</div>
                <p>x {qty}</p>
              </>
            )}
          </Card>
        </Col>
      </Row>
    </Card>
  );
};
