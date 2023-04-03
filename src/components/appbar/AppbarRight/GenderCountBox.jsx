import React from "react";
import { styled } from "@mui/material/styles";
import { Tooltip } from "@mui/material";

const Wrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const CountBox = styled("div")({
  padding: "10px",
  marginLeft: "10px",
  width: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "10px",
});
export default function GenderCountBox({ maleCount, femaleCount }) {
  return (
    <Wrapper>
      <Tooltip title="male count">
        <CountBox style={{ color: "black", background: "#87d23f" }}>
          {maleCount}
        </CountBox>
      </Tooltip>
      <Tooltip title="female count">
        <CountBox style={{ color: "white", background: "#ff1a00" }}>
          {femaleCount}
        </CountBox>
      </Tooltip>
    </Wrapper>
  );
}
