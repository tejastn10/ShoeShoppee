import { Divider, PageHeader, Row } from "antd";
import { CardItem } from "../components/CardItem";

export const Search = () => {
  return (
    <div className="container">
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Search Results"
        subTitle="Total Products Found..."
      />
      <Divider />
      <div>
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
      </div>
    </div>
  );
};
