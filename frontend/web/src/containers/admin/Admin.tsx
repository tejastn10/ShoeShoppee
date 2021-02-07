import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  message,
  Button,
  Card,
  PageHeader,
  Popconfirm,
  Table,
  Tag,
} from "antd";
import { DeleteOutlined, SwapOutlined } from "@ant-design/icons";

import { AdminState, AuthState } from "../../store/@types";
import {
  getUserListRequest,
  userDeleteRequest,
  updatePrivilegeRequest,
} from "../../store/actions/actions";
import { ApplicationState } from "../../store/store";

import { Loading } from "../../components/Loading";

export const Admin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const adminState = useSelector<ApplicationState, AdminState>(
    (state) => state.admin
  );
  const authState = useSelector<ApplicationState, AuthState>(
    (state) => state.authState
  );
  const { isLoading, errors, messages, users } = adminState;

  const deleteUser = (id: string) => {
    if (id) {
      dispatch(userDeleteRequest(id));
    }
  };

  const updateUser = ({ _id, isAdmin }: any) => {
    if (_id) {
      dispatch(updatePrivilegeRequest({ id: _id, isAdmin: !isAdmin }));
    }
  };

  const userColumns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Admin",
      dataIndex: "isAdmin",
      render: (isAdmin: boolean) => {
        return isAdmin ? (
          <Tag color="green" key="1">
            Admin
          </Tag>
        ) : (
          <Tag color="red" key="1">
            Not Admin
          </Tag>
        );
      },
    },
    {
      title: "User Details",
      render: ({ _id, isAdmin }: any) => {
        return (
          <Popconfirm
            title="Change privileges of the user?"
            onConfirm={() => updateUser({ _id, isAdmin })}
            okText="Yes"
            cancelText="No"
          >
            <Button>
              <SwapOutlined />
              Toggle Privileges
            </Button>
          </Popconfirm>
        );
      },
    },
    {
      title: "Delete User",
      render: ({ _id }: any) => {
        return (
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => deleteUser(_id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
              Delete
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        );
      },
    },
  ];

  useEffect(() => {
    if (authState.auth?.isAdmin) {
      dispatch(getUserListRequest());
    } else {
      history.push("/");
    }

    if (errors.results) {
      message.error(errors.results.message);
      history.push("/");
    }

    if (messages.message) {
      message.success(messages.message);
    }
  }, [
    authState.auth?.isAdmin,
    dispatch,
    errors.results,
    history,
    messages.message,
  ]);

  return (
    <div className="container">
      <Card>
        <PageHeader
          className="site-page-header"
          onBack={() => history.goBack()}
          title="Admin Panel"
        />
      </Card>
      <Card>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Card title="All Users">
              <Table
                columns={userColumns}
                dataSource={users!}
                rowKey={(user) => user._id}
              />
            </Card>
            <Table />
          </>
        )}
      </Card>
    </div>
  );
};
