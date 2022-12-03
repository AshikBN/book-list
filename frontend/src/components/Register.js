import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("h1");
    if (!username) {
      alert("Email is required");
      return;
    } else if (!password) {
      alert("Password is required");
      return;
    } else if (!confirmpassword) {
      alert("Cofirm Password is required");
      return;
    }

    const { data } = await axios.post("/api/register", { username, password });
    if (data) {
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/books");
    }
  };

  const handleClick = (e) => {
    // e.preventDefault();
    // alert("Goes to registration page");
  };
  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter the email"
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
        <div className="input-group">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            onChange={(e) => {
              setConfirmpassword(e.target.value);
            }}
          />
        </div>
        <button onClick={handleSubmit} className="btn1 primary">
          Register
        </button>
      </form>
      <button
        className="btn1 secondary"
        onClick={() => {
          navigate("/");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Register;
