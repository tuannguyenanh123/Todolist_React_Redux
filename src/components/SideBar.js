import React from "react";
import { Menu } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;

const SideBar = () => {
  return (
    <div>
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu
          key="sub4"
          icon={<PlusCircleOutlined />}
          title="Navigation Three"
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};
export default SideBar;
