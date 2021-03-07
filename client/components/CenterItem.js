import React from "react";
import styled from "@emotion/styled";

const CenterItemBox = styled.div`
  border: 1px solid black;
  height: 150px;
`;

const CenterItemOne = styled.div`
  width: 100%;
  border: 1px solid gold;
  height: 150px;
`;

const CenterItem = () => {
  return (
    <CenterItemBox>
      <CenterItemOne>asd</CenterItemOne>
    </CenterItemBox>
  );
};

export default CenterItem;
