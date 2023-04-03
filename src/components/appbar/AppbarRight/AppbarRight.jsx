import React from "react";
import { styled } from "@mui/material/styles";
import SearchBar from "./SearchBar";
import GenderCountBox from "./GenderCountBox";
import { useSelector } from "react-redux";

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "390px",
});
export default function AppbarLeft() {
  const eventData = useSelector((state) => {
    return state.events.eventData;
  });
  let maleCount = 0,
    femaleCount = 0;
  eventData.forEach((data) => {
    if (data.Gender === "Male") maleCount++;
    else if (data.Gender === "Female") femaleCount++;
  });
  return (
    <Wrapper>
      <SearchBar />
      <GenderCountBox maleCount={maleCount} femaleCount={femaleCount} />
    </Wrapper>
  );
}
