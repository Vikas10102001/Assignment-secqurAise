import React from "react";
import { styled } from "@mui/material/styles";
import AppbarLogo from "./AppbarLogo";
import AppbarRight from "./AppbarRight/AppbarRight";

const MainContainer = styled("div")({
  position: "absolute",
  top: 0,
  right: 0,
  height: "48px",
  backgroundColor: "#010165de",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 10px",
});

export default function Appbar() {
  return (
    <MainContainer>
      <AppbarLogo />
      <AppbarRight />
    </MainContainer>
  );
}
