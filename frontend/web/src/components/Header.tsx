import { Link } from "react-router-dom";

import {
  ShoppingFilled,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";

const { Search } = Input;

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div>
          <ShoppingFilled />
          ShoeShoppee
        </div>
      </Link>
      <Search
        className="search"
        allowClear
        bordered={false}
        placeholder="Search"
        enterButton
      />
      <div>
        <Link to="/login">
          <Button type="primary">
            <LoginOutlined />
            Log In
          </Button>
        </Link>
        <Link to="/register">
          <Button>
            <UserAddOutlined />
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
};
