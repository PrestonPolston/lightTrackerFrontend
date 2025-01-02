import "./App.css";
import { Routes, Route } from "react-router-dom";
import GetUsers from "./components/GetUsers";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/getUsers" element={<GetUsers />} />
      </Routes>
    </>
  );
}

export default App;
