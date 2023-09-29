import React, { useState } from "react";

const Register = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      // Simulate a registration API call (replace with actual API call)
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 200)
      {
        onRegister();
        formData.username = ""
        formData.password = ""
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
