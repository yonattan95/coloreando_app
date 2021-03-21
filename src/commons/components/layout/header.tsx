import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  text-align: center;
  flex-basis: 10%;
  padding-top: 1rem;
`;

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return (
    <HeaderContainer>
      <Typography variant="h4" color="primary">
        {title}
      </Typography>
    </HeaderContainer>
  );
}

export default Header;
