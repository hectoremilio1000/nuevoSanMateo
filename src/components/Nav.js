import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  HomeOutlined,
  ProfileOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";
import MenuItem from "antd/lib/menu/MenuItem";

const Nav = props => {
  const { current } = props;
  return (
    <div>
      <Menu selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home">
          <Link to={`/`}>
            <HomeOutlined />
            Home
          </Link>
        </Menu.Item>
        {/* <Menu.Item key="profile">
          <Link to="/profile">
            <ProfileOutlined />
            Profile
          </Link>
        </Menu.Item> */}
        {/* <MenuItem.Item key={"protected"}>
          <Link to="/protected">
            <FileProtectOutlined />
            Protected
          </Link>
        </MenuItem.Item> */}
      </Menu>
    </div>
  );
};
export default Nav;
