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
    <Menu
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-end",
      }}
      selectedKeys={[current]}
      mode="horizontal"
    >
      <Menu.Item key="home">
        <Link to={`/`}>
          <img
            src="https://imagenesrutalab.s3.amazonaws.com/sanmateo/logo+nuevo/SAN-MATEO.png"
            alt="laboratorio san mateo"
            width="200"
            className="nombre_logo"
          />
        </Link>
      </Menu.Item>

      <Menu.Item key="administrador">
        <Link to="/administrador">
          <p style={{ fontWeight: 800 }}>Iniciar Sesión</p>
        </Link>
      </Menu.Item>
    </Menu>
  );
};
export default Nav;
