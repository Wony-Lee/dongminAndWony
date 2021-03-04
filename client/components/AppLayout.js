import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import { Col, Row } from "antd";

const Global = createGlobalStyle`
body {
      background:ivory;
      margin:0 auto;
}
`;

const TopMenu = styled.div`
  border: 1px solid black;
  display: flex;
  width: 100%;
  align-items: center;
  height: 70px;
  background: white;
`;

const LeftMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding-left: 10%;
`;

const RightMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 10%;
`;

const AppLayout = ({ children }) => {
  return (
    <>
      <Global />
      <TopMenu>
        <LeftMenu>imageLogo</LeftMenu>
        <RightMenu>우측</RightMenu>
      </TopMenu>

      <Col xs={24} md={6}>
        asd
      </Col>
      <Col xs={24} md={12}>
        {children}
      </Col>
      <Col xs={24} md={6}>
        asd
      </Col>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
