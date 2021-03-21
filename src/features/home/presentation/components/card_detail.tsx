import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { ColorItem } from "../../models/colors_response";

const CardContainer = styled.div<{ color?: string }>`
  min-width: 300px;
  background-color: ${({ color }) => color ?? "white"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.8rem;
  padding: 0.5rem;
  margin: 1rem;
  cursor: default;
  flex: 1;
`;

type CardDetailProps = {
  data: ColorItem;
};

function CardDetail({
  data: { year, name, color, pantone_value },
}: CardDetailProps) {
  return (
    <CardContainer color={color}>
      <Typography variant="subtitle1" align="left" color="textPrimary">
        {year}
      </Typography>
      <Typography variant="h3" align="center" color="textPrimary">
        ¡Copiado!
      </Typography>
      <Typography variant="subtitle1" align="right" color="textPrimary">
        {pantone_value}
      </Typography>
    </CardContainer>
  );
}

export default CardDetail;
