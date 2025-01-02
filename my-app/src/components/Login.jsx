import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    //test to see if form will log info to console
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  return (
    <>
      <form className="loginForm">
        <h1>Login</h1>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" onClick={handleSubmit} value={"Login"} />
        </div>
      </form>
    </>
  );
};
export default Login;
