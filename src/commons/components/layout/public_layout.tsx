import React, { ReactChild } from "react";
import styled from "styled-components";
import Header from "./header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

type PublicLayoutProps = {
  children: ReactChild;
};
function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <Container>
      <Header title="Colores" />
      {children}
    </Container>
  );
}

export default PublicLayout;
