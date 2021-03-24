// React
import { FC, Dispatch, SetStateAction, useEffect } from "react";
import { useDispatch } from "react-redux";

// UI Library
import { Button, Form, Input, Select, Modal, message } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";

// Redux
import {
  clearProductDetailsError,
  createProductReviewRequest,
} from "../../store/actions/actions";

// Custom Hooks
import { useProductDetail } from "../../hooks";

// Custom Types
type Props = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  productId: string;
};

const { Option } = Select;

export const ProductReviewForm: FC<Props> = ({
  visible,
  setVisible,
  productId,
}: Props) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const { productState } = useProductDetail();
  const { errors, messages } = productState;

  const onFinish = ({ rating, comment }: any) => {
    console.log(productId, rating, comment);
    dispatch(createProductReviewRequest({ id: productId, rating, comment }));
  };

  useEffect(() => {
    if (messages.message !== null) {
      form.resetFields();
      setVisible(false);
      message.success(messages.message);
    }
  }, [form, messages.message, setVisible]);

  useEffect(() => {
    if (errors.results !== null) {
      message.error(errors.results.message);
      dispatch(clearProductDetailsError());
    }
  }, [dispatch, errors.results]);

  return (
    <Modal
      title="Add Product Review"
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
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="rating"
          rules={[
            {
              required: true,
              message: "Please enter Product Rating",
            },
          ]}
        >
          <Select defaultValue={0} style={{ width: "100%" }}>
            <Option value={1}>1 - Poor</Option>
            <Option value={2}>2 - Fair</Option>
            <Option value={3}>3 - Good</Option>
            <Option value={4}>4 - Very Good</Option>
            <Option value={5}>5 - Excellent</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="comment"
          rules={[
            {
              required: true,
              message: "Please input Product Review",
            },
          ]}
        >
          <Input.TextArea allowClear placeholder="Review" />
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
