import { createSlice } from "@reduxjs/toolkit";

const eventsSlice = createSlice({
  name: "event",
  initialState: { eventData: [], currentEvent: null },
  reducers: {
    setData(state, action) {
      return { ...state, eventData: action.payload };
    },
    setCurrentEvent(state, action) {
      return { ...state, currentEvent: action.payload };
    },
  },
});

export default eventsSlice;
export const { setData, setCurrentEvent } = eventsSlice.actions;
