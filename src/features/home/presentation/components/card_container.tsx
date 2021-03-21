import React, { ReactChild } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* align-content: center; */
  /* flex: 1; */
  flex-basis: 80%;
  align-self: center;
`;
type CardContainerProps = {
  items: ReactChild[];
};
function CardContainer({ items }: CardContainerProps) {
  return <Container>{items}</Container>;
}

export default CardContainer;
