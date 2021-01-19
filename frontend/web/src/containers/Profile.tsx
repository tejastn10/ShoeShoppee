import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
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
} from "antd";

import { ApplicationState } from "../store/store";
import { AuthState, UserProfileState } from "../store/@types";
import {
  getUserProfileRequest,
  updateUserProfileRequest,
} from "../store/actions/actions";

import { Loading } from "../components/Loading";

type validationStatus = "success" | "error" | "validating";

type submitProps = {
  name?: string;
  email?: string;
  password?: string;
  password2?: string;
};

export const Profile = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [validationStatus, setValidationStatus] = useState<validationStatus>(
    "success"
  );
  const [feedback, setFeedback] = useState(false);

  const authState = useSelector<ApplicationState, AuthState>(
    (state) => state.authState
  );
  const profileState = useSelector<ApplicationState, UserProfileState>(
    (state) => state.userProfile
  );

  const { auth } = authState;
  const { profile, isLoading, errors } = profileState;

  useEffect(() => {
    if (errors.results) {
      message.error(errors.results.message);
      setValidationStatus("error");
      setFeedback(true);
    }
  }, [errors.results]);

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
              <Empty />
            </Card>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};
