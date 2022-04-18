import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  background: #1d1d1d;
  position: relative;
  top: 0;
  left: 0;
`;
const ImageBox = styled.div`
  width: 100px;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -50px;
  img {
    width: 100%;
  }
`;
function Header() {
  return (
    <HeaderContainer>
      <ImageBox>
        <img src="logo.png" />
      </ImageBox>
    </HeaderContainer>
  );
}

export default Header;
