import { ShoppingFilled } from "@ant-design/icons";
import { Button, Input } from "antd";

const { Search } = Input;

export const Header = () => {
  return (
    <div className="header">
      <div>
        <ShoppingFilled />
        ShoeShoppee
      </div>
      <Search
        className="search"
        allowClear
        bordered={false}
        placeholder="Search"
        enterButton
      />
      <div>
        <Button type="primary">Log In</Button>
        <Button>Register</Button>
      </div>
    </div>
  );
};
