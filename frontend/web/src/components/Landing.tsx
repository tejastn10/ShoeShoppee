import { Link } from "react-router-dom";

import { Card, Carousel, Col, Divider, Row } from "antd";

export const Landing = () => {
  return (
    <div>
      <Carousel className="container" effect="fade" autoplay>
        <div>
          <Link to={`/search/new_releases`}>
            <h3>New Releases</h3>
          </Link>
        </div>
        <div>
          <Link to={`/search/top_selling`}>
            <h3>Top Selling</h3>
          </Link>
        </div>
        <div>
          <Link to={`/search/formal`}>
            <h3>Formal</h3>
          </Link>
        </div>
        <div>
          <Link to={`/search/casual`}>
            <h3>Casual</h3>
          </Link>
        </div>
        <div>
          <Link to={`/search/sports`}>
            <h3>Sports</h3>
          </Link>
        </div>
      </Carousel>
      <Divider>Categories</Divider>
      <div className="container">
        <Row gutter={12}>
          <Col span={8}>
            <Card className="cardtitle" title="Men" bordered={false}>
              <Link to={`/search/formal/men`}>
                <Card.Grid className="category-links">Formal</Card.Grid>
              </Link>
              <Link to={`/search/casual/men`}>
                <Card.Grid className="category-links">Casual</Card.Grid>
              </Link>
              <Link to={`/search/sports/men`}>
                <Card.Grid className="category-links">Sports</Card.Grid>
              </Link>
            </Card>
          </Col>
          <Col span={8}>
            <Card className="cardtitle" title="Women" bordered={false}>
              <Link to={`/search/formal/women`}>
                <Card.Grid className="category-links">Formal</Card.Grid>
              </Link>
              <Link to={`/search/casual/women`}>
                <Card.Grid className="category-links">Casual</Card.Grid>
              </Link>
              <Link to={`/search/sports/women`}>
                <Card.Grid className="category-links">Sports</Card.Grid>
              </Link>
            </Card>
          </Col>
          <Col span={8}>
            <Card className="cardtitle" title="Children" bordered={false}>
              <Link to={`/search/formal/children`}>
                <Card.Grid className="category-links">Formal</Card.Grid>
              </Link>
              <Link to={`/search/casual/children`}>
                <Card.Grid className="category-links">Casual</Card.Grid>
              </Link>
              <Link to={`/search/sports/children`}>
                <Card.Grid className="category-links">Sports</Card.Grid>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
