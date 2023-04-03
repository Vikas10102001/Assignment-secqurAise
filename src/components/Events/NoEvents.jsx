import React from "react";
import { styled } from "@mui/material";

const Wrapper = styled("div")({
  height: "80vh",
  fontWeight:'bold',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export default function NoEvents() {
  return <Wrapper>No data for this filter</Wrapper>;
}
