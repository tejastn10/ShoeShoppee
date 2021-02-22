import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { Empty, message, PageHeader, Row, Card } from "antd";

import { ProductListState } from "../../store/@types";

import {
  getProductListRequest,
  searchProductRequest,
} from "../../store/actions/actions";
import { ApplicationState } from "../../store/store";
import { Loading } from "../../components/Loading";
import { CardItem } from "../../components/CardItem";

interface SearchParams {
  keyword: string;
}

export const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { keyword }: SearchParams = useParams();

  const productList = useSelector<ApplicationState, ProductListState>(
    (state) => state.productList
  );
  const { products, isLoading, errors } = productList;

  useEffect(() => {
    if (!keyword) {
      dispatch(getProductListRequest());
    } else {
      dispatch(searchProductRequest({ keyword }));
    }
  }, [dispatch, keyword]);

  useEffect(() => {
    if (errors.results) {
      message.error(errors.results.message);
    }
  }, [errors.results]);

  return (
    <div className="container">
      <Card>
        <PageHeader
          className="site-page-header"
          onBack={() => history.goBack()}
          title="Search/Filter"
          subTitle="Results..."
        />
      </Card>
      <Card>
        {isLoading ? (
          <Loading />
        ) : errors.results ? (
          <div className="empty">
            <Empty />
          </div>
        ) : (
          <Row gutter={6}>
            {products?.map((p) => (
              <CardItem product={p} key={p._id} />
            ))}
          </Row>
        )}
      </Card>
    </div>
  );
};
