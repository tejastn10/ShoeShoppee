import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Button, Divider, Form, Input, message } from "antd";

import { ApplicationState } from "../../store/store";
import { AuthState } from "../../store/@types";
import { registerAuthRequest } from "../../store/actions/actions";

type submitProps = {
  name: string;
  email: string;
  password: string;
  password2: string;
};

export const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userState = useSelector<ApplicationState, AuthState>(
    (state) => state.authState
  );
  const { errors, auth } = userState;

  useEffect(() => {
    if (errors.results) {
      message.error(errors.results.message);
    }
  }, [errors.results]);

  useEffect(() => {
    if (auth) {
      history.goBack();
    }
  }, [history, auth]);

  const onFinish = ({ name, email, password, password2 }: submitProps) => {
    if (password !== password2) {
      message.error("Passwords do not match!");
    } else {
      dispatch(registerAuthRequest({ name, email, password }));
    }
  };
  return (
    <>
      <div className="form">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <h2>
            Register
            <UserAddOutlined />
          </h2>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Full Name"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your E-mail ID!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email ID"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="password2"
            rules={[
              {
                required: true,
                message: "Please confirm your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              <UserAddOutlined />
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="option">
        <Divider />
        <Link to="/login">
          <Button type="link">Already a customer! Log In</Button>
        </Link>
      </div>
    </>
  );
};
