// React
import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// UI Library
import { Button, Card, PageHeader, Row, Col, message, Empty } from "antd";
import {
  ShoppingCartOutlined,
  MoneyCollectOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

// Redux
import { ApplicationState } from "../../store/store";
import {
  addToCart,
  emptyCart,
  removeFromCart,
} from "../../store/actions/actions";

// Custom Components
import { OrderItem } from "../../components/OrderItem";
import { CartSummary } from "../../components/CartSummary";

// Custom Types
import { CartState, CartItem as item } from "../../store/@types";

export const Cart: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const cart = useSelector<ApplicationState, CartState>((state) => state.cart);
  const { cartList, price, totalItems } = cart;

  useEffect(() => {
    if (cartList === null || cartList.length === 0) {
      message.warning("Your Cart is Empty! ");
    }
  }, [cartList]);

  const removeFromCartHandler = (id: string) => {
    dispatch(removeFromCart({ id }));
  };

  const addToCartHandler = ({ id, name, image, price, count, qty }: item) => {
    dispatch(addToCart({ id, name, image, price, count, qty }));
  };

  const emptyCartHandler = () => {
    dispatch(emptyCart());
  };

  return (
    <div className="container">
      <Card>
        <PageHeader
          onBack={() => history.push("/")}
          title="Shopping Cart"
          extra={[
            <Button key="2" onClick={() => history.goBack()}>
              <ShoppingCartOutlined />
              Continue Shopping
            </Button>,
            <Button
              key="1"
              type="primary"
              onClick={() => history.push("/checkout")}
              disabled={
                true ? cartList?.length === 0 || cartList === null : false
              }
            >
              <MoneyCollectOutlined />
              Proceed to checkout
            </Button>,
          ]}
        />
      </Card>
      <Card>
        <Row>
          <Col span={18}>
            <Card title="List Items" bordered={false}>
              {cartList?.length === 0 || cartList === null ? (
                <Empty description="Your shopping cart is empty" />
              ) : (
                <>
                  <Card bordered={false}>
                    <Button onClick={emptyCartHandler} danger type="primary">
                      <DeleteOutlined />
                      Empty Cart
                    </Button>
                  </Card>
                  {cartList.map((item) => {
                    return (
                      <OrderItem
                        item={item}
                        removeFromCart={removeFromCartHandler}
                        addToCart={addToCartHandler}
                        key={item.id}
                      />
                    );
                  })}
                </>
              )}
            </Card>
          </Col>
          <Col span={6}>
            <CartSummary totalItems={totalItems} price={price!} />
          </Col>
        </Row>
      </Card>
    </div>
  );
};
