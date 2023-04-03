import React, { useState } from "react";
import { styled } from "@mui/material";
import EventsTop from "./EventsTop";
import EventList from "./EventList";
import LoadingSpinner from "../../utils/shared/LoadingSpinner";

const MainContainer = styled("div")({
  flex: 3,
  border: "8px solid #c9c9c9",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
});
export default function Events({ loading }) {
  const [filter, setFilter] = useState({ Location: [], Gender: [], Date: "" });

  return (
    <MainContainer>
      <EventsTop setFilter={setFilter} filter={filter} />
      {loading ? (
        <LoadingSpinner
          additionalStyles={{ position: "relative", top: "45%" }}
        />
      ) : (
        <EventList filter={filter} />
      )}
    </MainContainer>
  );
}
