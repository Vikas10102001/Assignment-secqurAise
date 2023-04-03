import { Typography, styled } from "@mui/material";
import React from "react";
const MainContainer = styled("div")({
  background: "wheat",
  flex: 6,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export default function NoDetail() {
  return (
    <MainContainer>
      <Typography variant="h5">Click on events to see the details</Typography>
    </MainContainer>
  );
}
