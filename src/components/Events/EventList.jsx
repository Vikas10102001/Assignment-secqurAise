import { styled } from "@mui/system";
import React from "react";
import EventsListItem from "./EventsListItem";
import { connect } from "react-redux";
import { formatDate } from "../../utils/date";
import NoEvents from "./NoEvents";
const Wrapper = styled("div")({
  overflowY: "scroll",
  overflowX: "none",
});
const filterData = (data, filter) => {
  const filterLocationInitial = filter.Location.length === 0;
  const filterGenderInitial = filter.Gender.length === 0;
  const filterDateInitial = filter.Date === "";

  const filteredData = data.filter((el) => {
    const locationFilter =
      filterLocationInitial || filter.Location.includes(el.Location);
    const genderFilter =
      filterGenderInitial || filter.Gender.includes(el.Gender);
    const dateFilter = filterDateInitial || filter.Date === formatDate(el.Date);
    return locationFilter && genderFilter && dateFilter;
  });

  return filteredData;
};

function EventList({ currentEvent, eventData, filter }) {
  const filteredData = filterData(eventData, filter);
  console.log(filteredData);
  return (
    <Wrapper>
      {filteredData.length === 0 ? (
        <NoEvents />
      ) : (
        filteredData.map((el) => {
          return (
            <EventsListItem
              key={el.ID}
              item={el}
              active={currentEvent?.ID === el.ID}
            />
          );
        })
      )}
    </Wrapper>
  );
}

const mapStatesToProps = ({ events }) => {
  return events;
};

export default connect(mapStatesToProps)(EventList);
