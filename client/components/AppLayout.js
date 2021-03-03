import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
body {
      background:ivory;
      margin:0 auto;
}
`;

const TopMenu = styled.div`
  border: 1px solid black;
  display: flex;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  align-items: center;
  height: 70px;
`;

const LeftMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const RightMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const AppLayout = ({ children }) => {
  return (
    <>
      <Global />
      <TopMenu>
        <LeftMenu>imageLogo</LeftMenu>
        <RightMenu>우측</RightMenu>
      </TopMenu>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
