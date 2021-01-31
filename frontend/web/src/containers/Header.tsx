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
import { Badge, Button, Dropdown, Input, Menu, message } from "antd";

import { ApplicationState } from "../store/store";
import { AuthState, CartState } from "../store/@types";
import { clearUserProfile, logoutUser } from "../store/actions/actions";

const { Search } = Input;

export const Header = () => {
  const authState = useSelector<ApplicationState, AuthState>(
    (state) => state.authState
  );
  const cartState = useSelector<ApplicationState, CartState>(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const qty = cartState.cartList?.reduce((acc, item) => acc + item.qty, 0);

  const logout = () => {
    message.success("You have successfully logged out!");
    dispatch(logoutUser());
    dispatch(clearUserProfile());
  };
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
          <Badge
            style={{ backgroundColor: "#000000" }}
            count={qty}
            overflowCount={10}
          >
            <Button type="link">
              <ShoppingCartOutlined />
              Cart
            </Button>
          </Badge>
        </Link>
      </Menu.Item>
    </Menu>
  );

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
      {authState.auth ? (
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
