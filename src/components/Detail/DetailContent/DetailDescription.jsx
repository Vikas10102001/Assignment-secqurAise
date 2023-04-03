import { Typography, styled } from "@mui/material";
import React from "react";
import { separateDate } from "../../../utils/date";
const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "60%",
  flex: 1,
  position: "relative",
  top: "15%",
  left: "5%",
  "@media(max-width:790px)": {
    top: "0",
  },
});
const MidItem = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});
const Top = ({ ID }) => {
  return (
    <div>
      <Typography variant="h5" sx={{ fontWeight: "600" }}>
        {ID}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: "600" }}>
        Person Detected
      </Typography>
    </div>
  );
};
const Mid = ({ left, right }) => {
  return (
    <MidItem>
      <Typography variant="h6">{left}</Typography>
      <Typography
        variant="h6"
        sx={{ width: "12rem" }}
      >{`:${right}`}</Typography>
    </MidItem>
  );
};
const Bottom = ({ description }) => {
  return (
    <div>
      <Typography variant="h6">Description:</Typography>
      <Typography variant="h6">{description}</Typography>
    </div>
  );
};

export default function DetailDescription({ currentEvent }) {
  console.log(currentEvent);
  const midItemDetail = {
    Name: currentEvent.Name,
    Location: currentEvent.Location,
    Date: currentEvent.Date,
    Time: currentEvent.Time,
  };
  const midItem = [];
  for (let key in midItemDetail) {
    midItem.push(<Mid left={key} right={midItemDetail[key]} key={key} />);
  }

  const [dd, mm, yyyy] = separateDate(currentEvent.Date);
  const description = `${currentEvent.Name} detected at ${currentEvent.Location} on ${dd} ${mm} ${yyyy} `;

  return (
    <Wrapper>
      <Top ID={currentEvent.ID} />
      <div>{midItem}</div>
      <Bottom description={description} />
    </Wrapper>
  );
}
