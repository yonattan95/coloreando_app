import { Pagination } from "@material-ui/lab";
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-basis: 10%;
  padding-bottom: 1rem;
  align-items: flex-end;
`;

type FooterProps = {
  totalPages: number;
  onChange: (e: object, page: number) => void;
  page: number;
};
function Footer({ totalPages, onChange, page }: FooterProps) {
  return (
    <FooterContainer>
      <Pagination
        count={totalPages}
        color="primary"
        page={page}
        onChange={onChange}
      />
    </FooterContainer>
  );
}

export default Footer;
