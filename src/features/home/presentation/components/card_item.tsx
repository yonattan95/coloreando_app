import { Box, Typography } from "@material-ui/core";
import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import styled from "styled-components";
import { ColorItem } from "../../models/colors_response";
import hexToRgba from "hex-to-rgba";

const CardContainer = styled.div<{ color?: string }>`
  min-width: 300px;
  background-color: ${({ color }) => color ?? "white"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.8rem;
  padding: 0.5rem;
  cursor: pointer;
  flex: 1;
  border: 3px solid white;
  &:hover {
    background-color: ${({ color }) =>
      color ? hexToRgba(color, 0.5) : "white"};
    border-color: ${({ color }) => color ?? "white"};
  }
`;

type CardItemProps = {
  data: ColorItem;
};

function CardItem({
  data: { year, name, color, pantone_value },
}: CardItemProps) {
  return (
    <CopyToClipboard text={color}>
      <CardContainer color={color}>
        <Typography variant="subtitle1" align="left" color="textPrimary">
          {year}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textPrimary">
          {name}
          <Box fontWeight={700}>{color}</Box>
        </Typography>
        <Typography variant="subtitle1" align="right" color="textPrimary">
          {pantone_value}
        </Typography>
      </CardContainer>
    </CopyToClipboard>
  );
}

export default CardItem;
