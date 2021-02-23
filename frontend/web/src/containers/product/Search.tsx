// React
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

// UI Library
import { Empty, message, PageHeader, Pagination, Row, Card } from "antd";

// Redux
import { ApplicationState } from "../../store/store";
import {
  clearProductListError,
  getProductListRequest,
  searchProductRequest,
} from "../../store/actions/actions";

// Custom Components
import { Loading } from "../../components/Loading";
import { CardItem } from "../../components/CardItem";

// Custom Types
import { Product, ProductListState } from "../../store/@types";
interface SearchParams {
  keyword: string;
}

export const Search: FC = () => {
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
      dispatch(clearProductListError());
    }
  }, [dispatch, errors.results]);

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
