import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "./slice/eventsSlice";

const store = configureStore({
  reducer: {
    events: eventsSlice.reducer,
  },
});

export default store;

