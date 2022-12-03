import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Authentication.css";

const Authentication = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("h1");
    if (!username) {
      alert("Email is required");
      return;
    } else if (!password) {
      alert("Password is required");
      return;
    }

    const { data } = await axios.post("/api/login", { username, password });
    if (data) {
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/books");
    }
  };

  return (
    <div className="App">
      <form className="form">
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            //name="email"
            placeholder="Enter the Email"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter the Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className="btn1 primary" onClick={handleLogin}>
          Login
        </button>
      </form>
      <button
        className="btn1 secondary"
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </button>
    </div>
  );
};

export default Authentication;
