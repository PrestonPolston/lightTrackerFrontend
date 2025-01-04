import "./App.css";
import { Routes, Route } from "react-router-dom";
import GetUsers from "./components/GetUsers";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/getUsers" element={<GetUsers />} />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
    </>
  );
}

export default App;
