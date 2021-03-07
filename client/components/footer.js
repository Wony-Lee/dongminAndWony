import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

const FooterBlock = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const TextArea = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
`;
const MyBlogArea = styled.div`
  display: center;
  justify-content: flex-end;
  position: relative;
  border: 1px solid red;
`;
const BlogTag = styled.span`
  padding-left: 15px;
  padding-right: 15px;
`;
const Footer = () => {
  return (
    <FooterBlock>
      <span>대충 이미지 넣을까?</span>
      <TextArea>
        <p>
          footer에 쓸 내용이 없어서
          <br />
          대충 써넣는내용
          <br />
          내용이 아무것도 없어서
          <br />
        </p>
        <p>서울시 강서구에서 작업중</p>
      </TextArea>
      <MyBlogArea>
        <Link href="http://dev-won.com">
          <a>
            <BlogTag>Wony</BlogTag>
          </a>
        </Link>
        <Link href="https://github.com/dogzz9445">
          <a>
            <BlogTag>
              <span>Dong</span>
            </BlogTag>
          </a>
        </Link>
      </MyBlogArea>
    </FooterBlock>
  );
};

export default Footer;
