import { styled, keyframes } from "@mui/material";
import React from "react";

const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); `;
const LoadingSpinnerOuter = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
const Spinner = styled("div")({
  border: "5px solid #f3f3f3",
  borderTop: "5px solid #3498db",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  animation: `${spin} 2s linear infinite`,
});
export default function LoadingSpinner({additionalStyles}) {
  return (
    <LoadingSpinnerOuter style={additionalStyles}>
      <Spinner></Spinner>
    </LoadingSpinnerOuter>
  );
}
