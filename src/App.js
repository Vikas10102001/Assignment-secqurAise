import { styled } from "@mui/material";
import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import Appbar from "./components/appbar/Appbar";
import Detail from "./components/Detail/Detail";
import Events from "./components/Events/Events";
import { database } from "./firebaseConfig";
import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./store/slice/eventsSlice";
import NoDetail from "./components/Detail/NoDetail";

const AppBody = styled("div")({
  width: "100%",
  height: "calc(100vh - 48px)",
  position: "absolute",
  bottom: 0,
  display: "flex",
});

function App() {
  const currentEvent = useSelector((state) => {
    return state.events.currentEvent;
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      const starCountRef = ref(database);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setLoading(false);
        dispatch(setData(data));
      });
    };
    fetchData();
  }, [dispatch]);
  return (
    <>
      <Appbar />
      <AppBody>
        <SideBar />
        {currentEvent ? <Detail /> : <NoDetail />}
        <Events loading={loading} />
      </AppBody>
    </>
  );
}

export default App;
