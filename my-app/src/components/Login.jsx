import { useState } from "react";
import { useLoginUserMutation } from "../api/lightTrackr";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  // Use the login mutation
  const [loginUser] = useLoginUserMutation();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await loginUser(formData).unwrap();
      console.log("Login successful", response);
      navigate("/getUsers");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <>
      <form className="loginForm" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" value={"Login"} />
        </div>
      </form>
    </>
  );
};

export default Login;
