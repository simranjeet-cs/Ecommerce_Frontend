import React, { useState } from "react";
// import {handleLogin} from './App.js'

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
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
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.status===200)
      {
        const setCookieHeader = response.headers.get("Set-Cookie");
        // response.setCookieHeader
        // console.log("setCookieHeader --asdasd:", response.getSetCookie());

        // if (setCookieHeader) {
        //   const token1 = setCookieHeader.split(";")[0].split("=")[1];
        //   console.log("Extracted token:", token1);
        //   document.cookie = `jwt_session=${token1}`;
        // } else {
        //   console.error("Set-Cookie header not found in the response.");
        // }

        onLogin();
        formData.username = ""
        formData.password = ""
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
