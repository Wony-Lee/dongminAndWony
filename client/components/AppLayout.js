import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { jsx, css, Global } from "@emotion/react";
import { injectGlobal } from "@emotion/css";
import styled from "@emotion/styled";

injectGlobal`
body{
  margin:0 auto;
  background:ivory;
}`;

const menuStyle = css`
  width: 100%;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  height: 50px;
  align-items: center;
`;
const MenuBar = ({ children }) => <div css={menuStyle}>{children}</div>;
/*
const LeftMenu = () => <div>좌측메뉴</div>;
const RightMenu = () => <div>우측메뉴</div>; */

const LeftMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 80%;
  margin-left: 20%;
`;
const RightMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;
  margin-right: 20%;
`;
const CenterMenu = styled.input`
  border: 1px solid red;
  border-radius: 15px;
  outline: none;
  height: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;

const AppLayout = ({ children }) => {
  return (
    <>
      <injectGlobal />
      <MenuBar>
        <LeftMenu>images logo</LeftMenu>
        <CenterMenu />
        <RightMenu>SideMenu</RightMenu>
      </MenuBar>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
