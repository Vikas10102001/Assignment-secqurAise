import { Typography, styled } from "@mui/material";
import React from "react";
import FilterMenu from "./FilterMenu/FilterMenu";

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});
export default function EventsTop({ setFilter, filter }) {
  return (
    <Wrapper>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Events
      </Typography>
      <FilterMenu setFilter={setFilter} filter={filter} />
    </Wrapper>
  );
}
