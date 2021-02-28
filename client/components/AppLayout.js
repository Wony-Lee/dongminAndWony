import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Menu, Input, Row, Col } from "antd";
import styled, { createGlobalStyle } from "styled-components";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal" style={{ textAlign: "center" }}>
        <Menu.Item>
          <Link href="/">
            <a>Image Logo</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
        <Menu.Item>
          <Link href="/login">
            <a>로그인/회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>

      <Row gutter={8} style={{ textAlign: "center" }}>
        <Col xs={24} md={6}>
          왼쪽메뉴
        </Col>
        <Col xs={24} md={12}>
          ㅁㄴㅇ
        </Col>
        <Col xs={24} md={6}>
          오른쪽
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
