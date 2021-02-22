import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { Empty, message, PageHeader, Pagination, Row, Card } from "antd";

import { Product, ProductListState } from "../../store/@types";

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

  const [offset, setOffset] = useState(0);
  const [pageItems, setPageItems] = useState<Product[] | null>(null);
  const [totalItemsCount, setTotalItemsCount] = useState(0);

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

  useEffect(() => {
    if (products) {
      setTotalItemsCount(products.length);
    }
  }, [products]);

  useEffect(() => {
    if (products) {
      setPageItems(products!.slice(offset, offset + 12));
    }
  }, [offset, products]);

  const onPageChange = (page: number) => {
    console.log(page);
    setOffset((page - 1) * 12);
  };

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
          <>
            <Row gutter={6}>
              {pageItems?.map((p) => (
                <CardItem product={p} key={p._id} />
              ))}
            </Row>
            <Pagination
              style={{ display: "flex", justifyContent: "center" }}
              onChange={onPageChange}
              defaultCurrent={1}
              total={totalItemsCount}
            />
          </>
        )}
      </Card>
    </div>
  );
};
