import "./App.css";
import { Routes, Route } from "react-router-dom";
import GetUsers from "./components/GetUsers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GetUsers />} />
      </Routes>
    </>
  );
}

export default App;
