import React from "react";
import { styled } from "@mui/material";
import DetailTitle from "./DetailTitle";
import { connect } from "react-redux";
import DetailContent from "./DetailContent/DetailContent";

const MainContainer = styled("div")({
  flex: 6,
});
function Detail({ currentEvent }) {
  return (
    <MainContainer>
      <DetailTitle title={currentEvent?.Gender} />
      <DetailContent currentEvent={currentEvent}/>
    </MainContainer>
  );
}

const mapStatesToProps = ({ events }) => {
  return events;
};

export default connect(mapStatesToProps)(Detail);
