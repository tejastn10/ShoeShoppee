import { Col, Divider, Row } from "antd";

export const Product = () => {
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={15}></Col>
        <Divider type="vertical" />
        <Col className="gutter-row" span={8}>
          <div>Product name and price</div>
        </Col>
      </Row>
      <Divider>Product Info</Divider>
      <div>A</div>
      <Divider>Reviews</Divider>
      <div>A</div>
    </div>
  );
};
