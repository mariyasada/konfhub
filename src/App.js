import { Route, Routes, useRoutes } from "react-router";
import "./App.css";
import EventPage from "./Page/EventPage";
import BuyTicketsPage from "./Page/BuyTicketsPage/BuyTicketsPage";
import { useData } from "./Context/DataContext";

function App() {
  const { isloading } = useData();
  if (isloading) return <div style={{ fontSize: "2rem" }}>Loading...</div>;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<EventPage />} />
        <Route path="/payment" element={<BuyTicketsPage />} />
      </Routes>
    </div>
  );
}

export default App;
