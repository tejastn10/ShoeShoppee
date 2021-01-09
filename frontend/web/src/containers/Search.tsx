import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Divider, Empty, message, PageHeader, Row } from "antd";
import { CardItem } from "../components/CardItem";

import { ProductListState } from "../store/@types";

import { getProductListRequest } from "../store/actions/actions";
import { ApplicationState } from "../store/store";
import { Loading } from "../components/Loading";

export const Search = () => {
  const dispatch = useDispatch();

  const productList = useSelector<ApplicationState, ProductListState>(
    (state) => state.productList
  );
  const { products, isLoading, errors } = productList;
  console.log(products);

  useEffect(() => {
    dispatch(getProductListRequest());
  }, [dispatch]);

  useEffect(() => {
    if (errors.results) {
      message.error(errors.results.message);
    }
  }, [errors.results]);

  return (
    <div className="container">
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Search/Filter"
        subTitle="Results..."
      />
      <Divider />
      <div>
        {isLoading ? (
          <Loading />
        ) : errors ? (
          <div className="empty">
            <Empty />
          </div>
        ) : (
          <Row gutter={16}>
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
          </Row>
        )}
      </div>
    </div>
  );
};
