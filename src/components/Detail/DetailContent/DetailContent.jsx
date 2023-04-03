import { styled } from "@mui/material";
import React from "react";
import DetailDescription from "./DetailDescription";
import DetailImage from "./DetailImage";
import { connect } from "react-redux";
const MainContainer = styled("div")({
  display: "flex",
  width: "100%",
  height: "95%",
  "@media(max-width:790px)": {
    flexDirection: "column-reverse",
  },
});
function DetailContent({ currentEvent }) {
  return (
    <MainContainer>
      <DetailDescription currentEvent={currentEvent} />
      <DetailImage imageName={currentEvent?.Name} />
    </MainContainer>
  );
}

const mapStatesToProps = ({ events }) => {
  return events;
};

export default connect(mapStatesToProps)(DetailContent);
