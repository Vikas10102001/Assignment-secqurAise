import React from "react";
import { styled } from "@mui/material/styles";

const WrapperAnchor = styled("a")({
  width: "200px",
  height: "40px",
  marginLeft: "15px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export default function AppbarLogo() {
  return (
    <WrapperAnchor href="#">
      <img
        src="https://static.wixstatic.com/media/33bcdf_47e6188502d44700861dae271b77e564~mv2.png/v1/fill/w_269,h_50,al_c,lg_1,q_85,enc_auto/SecqurAIse%20-%20Logo%20-%20250px.png"
        alt="SecqurAIse logo"
        width="150px"
        srcSet="https://static.wixstatic.com/media/33bcdf_47e6188502d44700861dae271b77e564~mv2.png/v1/fill/w_269,h_50,al_c,lg_1,q_85,enc_auto/SecqurAIse%20-%20Logo%20-%20250px.png"
        fetchpriority="high"
      ></img>
    </WrapperAnchor>
  );
}
