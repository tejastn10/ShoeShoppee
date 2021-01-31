import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, useLocation } from "react-router-dom";

import { Button, Card, PageHeader, Row, Col, message, Empty } from "antd";

import {
  ShoppingCartOutlined,
  MoneyCollectOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import {
  ProductDetailsState,
  CartState,
  CartItem as item,
} from "../store/@types";
import { addToCart, emptyCart, removeFromCart } from "../store/actions/actions";
import { ApplicationState } from "../store/store";

import { OrderItem } from "../components/OrderItem";
import { CartSummary } from "../components/CartSummary";

interface ProductPramas {
  id: string;
}

export const Cart = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { id }: ProductPramas = useParams();
  const qty: number = location.search
    ? Number(location.search.split("=")[1])
    : 1;

  const product = useSelector<ApplicationState, ProductDetailsState>(
    (state) => state.productDetails
  );
  const { productDetail } = product;

  const cart = useSelector<ApplicationState, CartState>((state) => state.cart);
  const { cartList, price, totalItems } = cart;

  useEffect(() => {
    if (id && productDetail) {
      const { name, image, price, count } = productDetail!;
      dispatch(addToCart({ id, name, image, price, count, qty }));
    }
  }, [dispatch, id, productDetail, qty]);

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
          onBack={() => history.goBack()}
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
