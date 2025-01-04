import { useState } from "react";
import { useCreateUserMutation } from "../api/lightTrackr";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verifyPassword: "",
    DOB: "",
  });

  const [error, setError] = useState("");
  const [createUser] = useCreateUserMutation();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Check if password and verifyPassword match
    if (name === "password" || name === "verifyPassword") {
      if (formData.password !== formData.verifyPassword) {
        setError("Passwords do not match.");
      } else {
        setError("");
      }
    }
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Calculate age
    const age = calculateAge(formData.DOB);

    // Concat for backend DB
    const name = `${formData.firstName} ${formData.lastName}`;

    // Object for call to backend createUser
    const userData = {
      name,
      email: formData.email,
      password: formData.password,
      age,
    };

    try {
      const response = await createUser(userData).unwrap();
      console.log("User created successfully", response);
    } catch (error) {
      console.error("Failed to create the user:", error);
      setError("Failed to create the account. Please try again.");
    }
  };

  return (
    <>
      <form className="createUser" onSubmit={handleSubmit}>
        <h1>Create An Account</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="verifyPassword">Verify Password:</label>
          <input
            type="password"
            id="verifyPassword"
            name="verifyPassword"
            value={formData.verifyPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="DOB">Date of Birth:</label>
          <input
            type="date"
            id="DOB"
            name="DOB"
            value={formData.DOB}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input type="submit" value={"Create Account"} />
        </div>
      </form>
    </>
  );
};

export default CreateAccount;
