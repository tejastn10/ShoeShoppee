import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { LockOutlined, UserOutlined, LoginOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, message } from "antd";

import { ApplicationState } from "../../store/store";
import { AuthState } from "../../store/@types";
import { loginAuthRequest } from "../../store/actions/actions";

type submitProps = {
  email: string;
  password: string;
};

export const LogIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const authState = useSelector<ApplicationState, AuthState>(
    (state) => state.authState
  );
  const { errors, auth } = authState;

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

  const onFinish = ({ email, password }: submitProps) => {
    dispatch(loginAuthRequest({ email, password }));
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
            Log In
            <LoginOutlined />
          </h2>
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
              prefix={<UserOutlined className="site-form-item-icon" />}
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
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              <LoginOutlined />
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="option">
        <Divider />
        <Link to="/register">
          <Button type="link">Don't have an account? Register here</Button>
        </Link>
      </div>
    </>
  );
};
