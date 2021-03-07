import React, { useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { jsx, css, Global } from "@emotion/react";
import { injectGlobal } from "@emotion/css";
import styled from "@emotion/styled";
import Footer from "./footer";
import Carousel from "./Carousel";
import CenterItem from "./CenterItem";

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
  height: 100px;
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
  margin-left: 15%;
`;
const RightMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;
  margin-right: 15%;
`;
const CenterInput = styled.input`
  border: 0;
  border-radius: 8px;
  width: 100%;
  outline: none;
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  background: #f2f2f2;
`;

const CarouselArea = styled.div`
  border: 1px solid black;
  background: navy;
  height: 300px;
  width: 100%;
`;

const RowBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  border: 1px solid black;
  height: 760px;
`;
const LeftArea = styled.div`
  border: 1px solid red;
  width: 15%;
`;
const CenterArea = styled.div`
  border: 1px solid blue;
  width: 70%;
  padding-top: 50px;
`;
const RightArea = styled.div`
  border: 1px solid black;
  width: 15%;
`;
const FooterArea = styled.div`
  width: 70%;
  background: white;
  height: 150px;
  padding-left: 15%;
  padding-right: 15%;
  display: flex;
  align-items: center;
`;
const AppLayout = ({ children }) => {
  const [SearchInput, setSearchInput] = useState();

  return (
    <>
      <MenuBar>
        <LeftMenu>images logo</LeftMenu>
        <CenterInput type="text" value={SearchInput} />
        <RightMenu>SideMenu</RightMenu>
      </MenuBar>
      <CarouselArea>
        <Carousel></Carousel>
      </CarouselArea>
      <RowBody>
        <LeftArea>좌측몸통</LeftArea>
        <CenterArea>
          <CenterItem />
        </CenterArea>
        <RightArea>{children}</RightArea>
      </RowBody>
      <FooterArea>
        <Footer />
      </FooterArea>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
