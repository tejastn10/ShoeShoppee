// React
import { FC } from "react";

// UI Library
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const loading = <LoadingOutlined spin style={{ fontSize: 50 }} />;

export const Loading: FC = () => {
  return (
    <div className="loading">
      <Spin indicator={loading} />
    </div>
  );
};
