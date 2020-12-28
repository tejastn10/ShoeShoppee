import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input } from "antd";

export const LogIn = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
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
          <h2>Log In</h2>
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
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="option">
        <Divider />
        <Button type="link">Don't have an account? Register here</Button>
      </div>
    </>
  );
};
