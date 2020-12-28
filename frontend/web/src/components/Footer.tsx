import { ShoppingFilled } from "@ant-design/icons";
import { Button } from "antd";

export const Footer = () => {
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
