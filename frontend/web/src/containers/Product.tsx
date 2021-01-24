import { useEffect, useState } from "react";
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
  Statistic,
  InputNumber,
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
  const [qty, setQty] = useState(1);

  const product = useSelector<ApplicationState, ProductDetailsState>(
    (state) => state.productDetails
  );
  const { productDetail, isLoading, errors } = product;

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

  const addToCart = () => {
    history.push(`/cart/${productDetail?._id}?qty=${qty}`);
  };

  return (
    <div className="container">
      <Card>
        <PageHeader
          className="site-page-header"
          onBack={() => history.goBack()}
          title={productDetail ? productDetail?.brand : "Product"}
          extra={[
            <>
              <InputNumber
                disabled={productDetail?.count === 0 ? true : false}
                defaultValue={1}
                min={1}
                max={productDetail?.count}
                onChange={(num: any) => setQty(num)}
              />
              <Button
                disabled={productDetail?.count === 0 ? true : false}
                className="cart-btn"
                type="primary"
                onClick={addToCart}
              >
                <ShoppingCartOutlined />
                Add To Cart
              </Button>
            </>,
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
                <Image className="img" src={productDetail?.image} />
              </Col>
              <Col className="gutter-row" span={16}>
                <Card className="prod-info" bordered={false}>
                  <Statistic title="Name" value={productDetail?.name} />

                  <Statistic title="Category" value={productDetail?.category} />
                  <Divider />
                  <p>{productDetail?.description}</p>
                  <Statistic
                    title="Price"
                    prefix="₹"
                    value={productDetail?.price}
                  />
                  <Divider />
                  <h4>RATING</h4>
                  <div>
                    <div style={{ marginBottom: "10px" }}>
                      <Rating rating={productDetail?.rating!} />
                    </div>
                    <h4>IN STOCK</h4>
                    <p>{productDetail?.count} Products</p>
                  </div>
                </Card>
              </Col>
            </Row>
            <Card title="Reviews">
              <div>
                {productDetail?.reviews ? (
                  <Empty />
                ) : (
                  productDetail?.reviews.map((review) => {
                    return <>{review}</>;
                  })
                )}
              </div>
            </Card>
          </Card>
        )}
      </div>
    </div>
  );
};
