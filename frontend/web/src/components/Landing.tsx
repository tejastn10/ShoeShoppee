import { Card, Carousel, Col, Divider, Row } from "antd";

export const Landing = () => {
  return (
    <div>
      <Carousel className="container" effect="fade" autoplay>
        <div>
          <h3>New Releases</h3>
        </div>
        <div>
          <h3>Top Selling</h3>
        </div>
        <div>
          <h3>Formal</h3>
        </div>
        <div>
          <h3>Casual</h3>
        </div>
        <div>
          <h3>Sports</h3>
        </div>
      </Carousel>
      <Divider>Categories</Divider>
      <div className="container">
        <Row gutter={12}>
          <Col span={8}>
            <Card className="cardtitle" title="Men" bordered={false}>
              <Card.Grid className="category-links">Formal</Card.Grid>
              <Card.Grid className="category-links">Casual</Card.Grid>
              <Card.Grid className="category-links">Sports</Card.Grid>
            </Card>
          </Col>
          <Col span={8}>
            <Card className="cardtitle" title="Women" bordered={false}>
              <Card.Grid>Formal</Card.Grid>
              <Card.Grid>Casual</Card.Grid>
              <Card.Grid>Sports</Card.Grid>
            </Card>
          </Col>
          <Col span={8}>
            <Card className="cardtitle" title="Children" bordered={false}>
              <Card.Grid>Formal</Card.Grid>
              <Card.Grid>Casual</Card.Grid>
              <Card.Grid>Sports</Card.Grid>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
