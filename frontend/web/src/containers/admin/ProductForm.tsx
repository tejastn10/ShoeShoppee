// React
import { FC, Dispatch, SetStateAction, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// UI Library
import { Button, Form, Input, Upload, Modal } from "antd";
import {
  PlusOutlined,
  CheckOutlined,
  CloseOutlined,
  QuestionCircleOutlined,
  InfoCircleOutlined,
  PayCircleOutlined,
  HddOutlined,
  UploadOutlined,
} from "@ant-design/icons";

// Redux
import { createProductRequest } from "../../store/actions/admin";

// Custom Types
import { useAdmin } from "../../hooks/useAdmin";
type Props = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

export const ProductForm: FC<Props> = ({ visible, setVisible }: Props) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { adminState } = useAdmin();

  const onUpload = async (info: any) => {
    console.log(info.file);
  };

  const onFinish = (product: any) => {
    console.log(product);
    dispatch(createProductRequest({ ...product, image: "" }));
  };

  useEffect(() => {
    if (adminState.messages !== null) {
      form.resetFields();
      setVisible(false);
    }
  }, [adminState.messages, form, setVisible]);

  return (
    <Modal
      title="Add a New Product"
      centered
      visible={visible}
      footer={null}
      okText="Add"
      onOk={onFinish}
      onCancel={() => setVisible(false)}
    >
      <Form
        form={form}
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter Product name",
            },
          ]}
        >
          <Input
            prefix={<PlusOutlined className="site-form-item-icon" />}
            placeholder="Product Name"
          />
        </Form.Item>
        <Form.Item
          name="brand"
          rules={[
            {
              required: true,
              message: "Please input Product Brand",
            },
          ]}
        >
          <Input
            prefix={<CheckOutlined className="site-form-item-icon" />}
            placeholder="Brand"
          />
        </Form.Item>
        <Form.Item
          name="category"
          rules={[
            {
              required: true,
              message: "Please input Product Category",
            },
          ]}
        >
          <Input
            prefix={<InfoCircleOutlined className="site-form-item-icon" />}
            placeholder="Category"
          />
        </Form.Item>
        <Form.Item
          name="type"
          rules={[
            {
              required: true,
              message: "Please input Product Type",
            },
          ]}
        >
          <Input
            prefix={<QuestionCircleOutlined className="site-form-item-icon" />}
            placeholder="Type"
          />
        </Form.Item>
        <Form.Item
          name="description"
          rules={[
            {
              required: true,
              message: "Please input Product Description",
            },
          ]}
        >
          <Input.TextArea allowClear placeholder="Description" />
        </Form.Item>
        <Form.Item
          name="price"
          rules={[
            {
              required: true,
              message: "Please input Product Price",
            },
          ]}
        >
          <Input
            prefix={<PayCircleOutlined className="site-form-item-icon" />}
            placeholder="Price"
          />
        </Form.Item>
        <Form.Item
          name="count"
          rules={[
            {
              required: true,
              message: "Please input Product Count",
            },
          ]}
        >
          <Input
            prefix={<HddOutlined className="site-form-item-icon" />}
            placeholder="Stock"
          />
        </Form.Item>
        <Form.Item
          label="Upload Product Image ( .png or .jpeg file only )"
          name="image"
          rules={[
            {
              required: true,
              message: "Please upload Product Image",
            },
          ]}
        >
          <Upload
            style={{ width: "100%" }}
            onChange={onUpload}
            maxCount={1}
            beforeUpload={() => false}
          >
            <Button block icon={<UploadOutlined />}>
              Upload
            </Button>
          </Upload>
        </Form.Item>
        <div>
          <Form.Item>
            <Button
              block
              size="large"
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              <PlusOutlined />
              Add
            </Button>
            <Button
              block
              size="large"
              className="login-form-button"
              onClick={() => setVisible(!visible)}
            >
              <CloseOutlined />
              Cancel
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};
