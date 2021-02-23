// React
import { FC } from "react";
import { Link } from "react-router-dom";

// UI Library
import { Card, Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";

export const NotFound: FC = () => {
  return (
    <div className="container">
      <Card className="notfound">
        <h1>404 - Page Not Found</h1>
        <Link to="/">
          <Button className="notfound-btn" type="link">
            <HomeOutlined />
            Go back home
          </Button>
        </Link>
      </Card>
    </div>
  );
};
