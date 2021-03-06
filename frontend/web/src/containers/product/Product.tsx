// React
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

// UI Library
import {
  Col,
  Divider,
  Row,
  PageHeader,
  Empty,
  message,
  Image,
  Card,
  Button,
  Statistic,
  InputNumber,
  notification,
} from "antd";
import { FormOutlined, ShoppingCartOutlined } from "@ant-design/icons";

// Redux
import {
  addToCart,
  clearProductDetailsError,
  getProductRequest,
} from "../../store/actions/actions";

// Custom Components
import { ProductReviewForm } from "./ProductReviewForm";
import { Loading } from "../../components/Loading";
import { Rating } from "../../components/Rating";

// Custom Hooks
import { useAuth, useProductDetail } from "../../hooks";

// Custom Types
interface ProductPramas {
  id: string;
}

export const Product: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id }: ProductPramas = useParams();

  const [qty, setQty] = useState<number>(1);
  const [visible, setVisible] = useState(false);

  const { authState } = useAuth();
  const { productState } = useProductDetail();
  const { productDetail, isLoading, errors } = productState;

  useEffect(() => {
    dispatch(getProductRequest(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (productState.messages.message !== null) {
      dispatch(getProductRequest(id));
    }
  }, [dispatch, id, productState.messages.message]);

  useEffect(() => {
    if (errors.results) {
      message.error(errors.results.message);
      dispatch(clearProductDetailsError());
    }
  }, [dispatch, errors.results]);

  useEffect(() => {
    if (productDetail && productDetail.count === 0) {
      message.warning("Sorry! Product is not available right now");
    }
  }, [productDetail]);

  const addToCartHandler = () => {
    if (productDetail) {
      const { name, image, price, count } = productDetail!;
      dispatch(addToCart({ id, name, image, price, count, qty }));

      notification.success({
        message: "Cart Updated",
        description: `Product ${name} added to cart`,
        placement: "bottomRight",
      });
    }
  };

  const addProductReview = () => {
    if (authState.auth?._id) {
      setVisible(!visible);
      console.log("clicked");
    } else {
      message.warning("Please login to write a review");
      history.push("/login");
    }
  };

  return !isLoading ? (
    productDetail ? (
      <div className="container">
        <Card>
          <PageHeader
            className="site-page-header"
            onBack={() => history.goBack()}
            title={productDetail ? productDetail.brand : "Product"}
            extra={[
              <InputNumber
                disabled={productDetail.count === 0 ? true : false}
                defaultValue={1}
                min={1}
                key={0}
                max={productDetail.count}
                onChange={(num: any) => setQty(num)}
              />,
              <Button
                disabled={productDetail.count === 0 ? true : false}
                className="cart-btn"
                type="primary"
                key={1}
                onClick={addToCartHandler}
              >
                <ShoppingCartOutlined />
                Add To Cart
              </Button>,
            ]}
          />
        </Card>
        <div>
          {isLoading ? (
            <Loading />
          ) : errors.results ? (
            <div className="empty">
              <Empty />
            </div>
          ) : (
            <Card>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                  <Image className="img" src={productDetail.image} />
                </Col>
                <Col className="gutter-row" span={16}>
                  <Card className="prod-info" bordered={false}>
                    <Statistic title="Name" value={productDetail?.name} />

                    <Statistic
                      title="Category"
                      value={productDetail?.category}
                    />
                    <Divider />
                    <p>{productDetail.description}</p>
                    <Statistic
                      title="Price"
                      prefix="₹"
                      value={productDetail.price}
                    />
                    <Divider />
                    <h4>RATING</h4>
                    <div>
                      <div style={{ marginBottom: "10px" }}>
                        <Rating rating={productDetail.rating!} />
                      </div>
                      <h4>IN STOCK</h4>
                      <p>{productDetail.count} Products</p>
                      <Button
                        className="cart-btn"
                        type="primary"
                        onClick={addProductReview}
                      >
                        <FormOutlined />
                        Add Product Review
                      </Button>
                    </div>
                  </Card>
                </Col>
              </Row>
              <Card title="Reviews">
                <ProductReviewForm
                  visible={visible}
                  setVisible={setVisible}
                  productId={id}
                />
                <div>
                  {productDetail.reviews.length === 0 ? (
                    <Empty />
                  ) : (
                    productDetail.reviews.map((review) => {
                      return (
                        <Card key={review.name}>
                          <div style={{ marginBottom: "10px" }}>
                            <h2>{review.name}</h2>
                            <Rating rating={review.rating!} />
                            <p>{review.comment}</p>
                            <p>{review.createdAt.substring(0, 10)}</p>
                          </div>
                        </Card>
                      );
                    })
                  )}
                </div>
              </Card>
            </Card>
          )}
        </div>
      </div>
    ) : (
      <Empty />
    )
  ) : (
    <Loading />
  );
};
