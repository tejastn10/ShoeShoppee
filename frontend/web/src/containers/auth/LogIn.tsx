// React
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

// UI Library
import { Button, Divider, Form, Input, message } from "antd";
import { LockOutlined, UserOutlined, LoginOutlined } from "@ant-design/icons";

// Redux
import { clearAuthError, loginAuthRequest } from "../../store/actions/actions";

// Custom Hooks
import { useAuth } from "../../hooks";

// Custom Types
type submitProps = {
  email: string;
  password: string;
};

export const LogIn: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { authState } = useAuth();
  const { errors, auth } = authState;

  useEffect(() => {
    if (errors.results) {
      message.error(errors.results.message);
      dispatch(clearAuthError());
    }
  }, [dispatch, errors.results]);

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
              size="large"
              htmlType="submit"
              className="login-form-button"
              block
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
