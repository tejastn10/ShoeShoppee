import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  ShoppingFilled,
  ShoppingCartOutlined,
  SolutionOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
  UserOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Input, Menu, message } from "antd";

import { ApplicationState } from "../store/store";
import { UserState } from "../store/@types";
import { logoutUser } from "../store/actions/actions";

const { Search } = Input;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link to="/profile">
        <Button type="link">
          <SolutionOutlined />
          Profile
        </Button>
      </Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link to="/cart">
        <Button type="link">
          <ShoppingCartOutlined />
          Cart
        </Button>
      </Link>
    </Menu.Item>
  </Menu>
);

export const Header = () => {
  const userState = useSelector<ApplicationState, UserState>(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const logout = () => {
    message.success("You have successfully logged out!");
    dispatch(logoutUser());
  };

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
      {userState.user ? (
        <div>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button type="link" onClick={(e) => e.preventDefault}>
              <UserOutlined />
              Account
              <DownOutlined />
            </Button>
          </Dropdown>
          <Button type="primary" onClick={logout}>
            <LogoutOutlined />
            Log Out
          </Button>
        </div>
      ) : (
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
      )}
    </div>
  );
};
