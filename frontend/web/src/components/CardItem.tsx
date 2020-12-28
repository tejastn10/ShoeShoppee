import { Col, Card } from "antd";
import React from "react";

export const CardItem = () => {
  return (
    <div>
      <Col className="gutter-row" span={6}>
        <Card
          hoverable
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Card.Meta
            title="Europe Street beat"
            description="www.instagram.com"
          />
        </Card>
      </Col>
    </div>
  );
};
