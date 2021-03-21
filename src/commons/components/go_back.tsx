import React from "react";
import { Box, Link, Typography } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import { useHistory } from "react-router";

function GoBack() {
  const history = useHistory();
  return (
    <Link
      onClick={() => {
        history.goBack();
      }}
      style={{ cursor: "pointer" }}
    >
      <Box display="flex" alignItems="center" pl="1rem">
        <ArrowBackIos />
        <Typography variant="subtitle1" display="inline">
          Retroceder
        </Typography>
      </Box>
    </Link>
  );
}

export default GoBack;
