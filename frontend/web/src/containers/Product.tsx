import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

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
} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import { ProductDetailsState } from "../store/@types";

import { getProductRequest } from "../store/actions/actions";
import { ApplicationState } from "../store/store";
import { Loading } from "../components/Loading";
import { Rating } from "../components/Rating";

interface ProductPramas {
  id: string;
}

export const Product = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id }: ProductPramas = useParams();

  const product = useSelector<ApplicationState, ProductDetailsState>(
    (state) => state.productDetails
  );
  const { productDetail, isLoading, errors } = product;

  // TODO: Check breaking code

  useEffect(() => {
    dispatch(getProductRequest(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (errors.results) {
      message.error(errors.results.message);
    }
  }, [errors.results]);

  useEffect(() => {
    if (productDetail && productDetail.count === 0) {
      message.warning("Sorry! Product is not available right now");
    }
  }, [productDetail]);

  return (
    <div className="container">
      <PageHeader
        className="site-page-header"
        onBack={() => history.goBack()}
        title="Product"
        subTitle="Info"
      />
      <Divider />
      <div>
        {isLoading ? (
          <Loading />
        ) : errors.results ? (
          <div className="empty">
            <Empty />
          </div>
        ) : (
          <>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={8}>
                <Image className="img" src={productDetail?.image} />
              </Col>
              <Col className="gutter-row" span={16}>
                <Card className="prod-info">
                  <Divider>{productDetail?.brand}</Divider>
                  <h2>{productDetail?.name}</h2>
                  <p>CATEGORY: {productDetail?.category}</p>
                  <p>DESCRIPTION: {productDetail?.description}</p>
                  <h4>PRICE: ₹ {productDetail?.price}</h4>
                  <h4>
                    RATING: <Rating rating={productDetail?.rating!} />
                  </h4>
                  <>
                    <h4>IN STOCK: {productDetail?.count} Products</h4>
                    {productDetail?.count! > 0 ? (
                      <Button className="cart-btn" type="primary">
                        <ShoppingCartOutlined />
                        Add To Cart
                      </Button>
                    ) : (
                      <Button className="cart-btn" type="primary" disabled>
                        <ShoppingCartOutlined />
                        Add To Cart
                      </Button>
                    )}
                  </>
                </Card>
              </Col>
            </Row>
            <Divider>Reviews</Divider>
            <div>
              {productDetail?.reviews ? (
                <Empty />
              ) : (
                productDetail?.reviews.map((review) => {
                  return <>{review}</>;
                })
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
