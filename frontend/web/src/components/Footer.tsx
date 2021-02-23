// React
import { FC } from "react";

// UI Library
import { Button } from "antd";
import { ShoppingFilled } from "@ant-design/icons";

export const Footer: FC = () => {
  return (
    <div className="footer">
      <div>
        <ShoppingFilled />
        ShoeShoppee
      </div>
      <Button type="link">Mobile App</Button>
      <Button type="link">Contact Us</Button>
      <Button type="link">Help Desk</Button>
      <div>&copy; ShoeShoppee, Inc. 2020.</div>
    </div>
  );
};
