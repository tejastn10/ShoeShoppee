// React
import { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// UI Library
import {
  Button,
  Card,
  Divider,
  Empty,
  Form,
  Input,
  message,
  PageHeader,
  Avatar,
  Table,
  Tag,
} from "antd";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";

// Redux
import {
  getUserProfileRequest,
  updateUserProfileRequest,
  ordersListRequest,
  clearUserError,
} from "../../store/actions/actions";

// Custom Components
import { Loading } from "../../components/Loading";

// Custom Hooks
import { useAuth, useOrder, useProfile } from "../../hooks";

// Custom Types
type validationStatus = "success" | "error" | "validating";
type submitProps = {
  name?: string;
  email?: string;
  password?: string;
  password2?: string;
};

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [validationStatus, setValidationStatus] = useState<validationStatus>(
    "success"
  );
  const [feedback, setFeedback] = useState(false);

  const { authState } = useAuth();
  const { profileState } = useProfile();
  const { orderState } = useOrder();

  const { auth } = authState;
  const { profile, isLoading, errors } = profileState;
  const { orders } = orderState;

  useEffect(() => {
    if (errors.results) {
      message.error(errors.results.message);
      dispatch(clearUserError());
      setValidationStatus("error");
      setFeedback(true);
    }
  }, [dispatch, errors.results]);

  useEffect(() => {
    if (!auth) {
      history.push("/login");
    } else {
      if (!profile) {
        // TODO: Get profile by id
        dispatch(getUserProfileRequest());
      }
    }
  }, [history, auth, dispatch, profile]);

  useEffect(() => {
    if (isLoading) {
      setValidationStatus("validating");
      setFeedback(true);
    } else if (!isLoading) {
      setValidationStatus("success");
      setFeedback(true);
      setTimeout(() => {
        setFeedback(false);
      }, 2000);
    }
  }, [isLoading]);

  useEffect(() => {
    dispatch(ordersListRequest());
  }, [dispatch]);

  const onFinish = ({ name, email, password, password2 }: submitProps) => {
    if (password !== password2) {
      message.error("Passwords do not match!");
    } else {
      dispatch(updateUserProfileRequest({ name, email, password }));
      console.log(name, email, password);
      if (isLoading) {
        setValidationStatus("validating");
        console.log(validationStatus);
        setFeedback(true);
      } else {
        setValidationStatus("success");
        setFeedback(true);
      }
    }
  };

  const columns = [
    {
      title: "OrderID",
      dataIndex: "_id",
    },
    {
      title: "Payment",
      dataIndex: "isPaid",
      render: (isPaid: boolean) => {
        return isPaid ? (
          <Tag color="green" key="1">
            Paid
          </Tag>
        ) : (
          <Tag color="red" key="1">
            Not Paid
          </Tag>
        );
      },
    },
    {
      title: "Delivered",
      dataIndex: "isDelivered",
      render: (isDelivered: boolean) => {
        return isDelivered ? (
          <Tag color="green" key="0">
            Delivered
          </Tag>
        ) : (
          <Tag color="yellow" key="0">
            Not Delivered
          </Tag>
        );
      },
    },
    {
      title: "Total Items",
      dataIndex: "totalItems",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
    },
    {
      title: "Order Details",
      render: ({ _id }: any) => {
        return (
          <Button onClick={() => history.push(`orders/${_id}`)}>
            View Details
          </Button>
        );
      },
    },
  ];

  return (
    <div className="container">
      <div>
        {errors.results && profile === null ? (
          <div className="empty">
            <Empty />
          </div>
        ) : profile?.name ? (
          <>
            <Card>
              <PageHeader
                className="site-page-header"
                onBack={() => history.goBack()}
                title="Profile"
                extra={["Recent Orders"]}
              />
            </Card>
            <Card>
              <Form
                className="profile"
                name="basic"
                initialValues={{
                  name: `${profile.name}`,
                  email: `${profile.email}`,
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <h2>
                  <Avatar
                    style={{ backgroundColor: "#000000" }}
                    size={{ xs: 32, sm: 40, md: 64, lg: 80, xl: 100, xxl: 120 }}
                  >
                    {profile?.name}
                  </Avatar>
                </h2>
                <Form.Item
                  name="name"
                  hasFeedback={feedback}
                  validateStatus={validationStatus as any}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  hasFeedback={feedback}
                  validateStatus={validationStatus as any}
                >
                  <Input
                    prefix={<MailOutlined className="site-form-item-icon" />}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  hasFeedback={feedback}
                  validateStatus={validationStatus as any}
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item
                  name="password2"
                  hasFeedback={feedback}
                  validateStatus={validationStatus as any}
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
                    Update Profile
                    <UserSwitchOutlined />
                  </Button>
                </Form.Item>
              </Form>
            </Card>
            <Divider />
            <Card title="Recent Orders">
              {orders ? (
                <Table
                  columns={columns}
                  dataSource={orders}
                  rowKey={(order) => order._id}
                />
              ) : (
                <Empty />
              )}
            </Card>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};
