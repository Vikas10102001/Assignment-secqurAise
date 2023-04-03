import { Typography, styled } from "@mui/material";
import React from "react";
import { formatDate } from "../../utils/date";
import { useDispatch } from "react-redux";
import { setCurrentEvent } from "../../store/slice/eventsSlice";
const Wrapper = styled("div")({
  display: "flex",
  position: "relative",
  justifyContent: "space-between",
  flexDirection: "column",
  background: "#c9c9c9",
  height: "70px",
  margin: "10px 5px 10px 5px",
  padding: "10px",
  cursor: "pointer",
  "&:hover": {
    background: "gray",
    color: "white",
  },
  "&.active": {
    background: "gray",
    color: "white",
  },
});
let EventDateAndTime = styled("span")({
  position: "absolute",
  right: "5px",
  top: "5px",
  fontSize: "14px",
  fontWeight: "400",
  "@media(max-width:1000px)": {
    display:'none'
  },
});

export default function EventsListItem({ item, active }) {
  const dispatch = useDispatch();
  const handleCurrentEvent = () => {
    dispatch(setCurrentEvent(item));
  };
  return (
    <Wrapper
      className={`${active ? "active" : ""}`}
      onClick={handleCurrentEvent}
    >
      <Typography>{item.ID + " : " + item.Location}</Typography>
      <Typography>Person Detected.</Typography>
      <EventDateAndTime>{`${formatDate(item.Date)}  ${
        item.Time
      }`}</EventDateAndTime>
    </Wrapper>
  );
}
