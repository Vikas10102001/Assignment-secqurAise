import { Dehaze, ExitToApp } from "@mui/icons-material";
import { styled } from "@mui/material";
import { Button } from "@mui/material";
import React from "react";

const MainContainer = styled("div")({
  background: "#59c2f2",
  flex:0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
});

export default function SideBar() {
  return (
    <MainContainer>
      <Button sx={{color:'#d6d0d0'}}>
        <Dehaze sx={{fontSize:'2rem'}}/>
      </Button>
      <Button sx={{color:'white',marginBottom:'30px'}}>
        <ExitToApp />
      </Button>
    </MainContainer>
  );
}
