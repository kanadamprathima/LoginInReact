import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  const [error, setError] = useState("");
  const [remainingAttempts, setRemainingAttempts] = useState(3);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform backend authentication here
    // You can use API calls or any other method to validate the credentials
    // const getUser = async () => {
    //   const response = await axios.post("");
    //   console.log("user details:", response);
    // };

    // Simulating authentication with hardcoded values (username: "admin", password: "password")
    if (username === "admin" && password === "password") {
      setError("");
      alert("Login successful!");
    } else if (username === "" || password === "") {
      setError("Missing credentials");
    } else {
      setError("Invalid username or password");
      setRemainingAttempts((prevAttempts) => prevAttempts - 1);
      if (remainingAttempts === 1) {
        // Disable the login button or take appropriate action after certain failed attempts
        alert("You have reached the maximum number of login attempts.");
      }
    }
    setUsername("");
    setPassword("");
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h1>Login</h1>
      <Container>
        <Row>
          <Col>{error && <div className="error-message">{error}</div>}</Col>
        </Row>
        <Row>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </Row>
        <Row>
          <div className="form-group">
            <label>Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              onClick={handleTogglePasswordVisibility}
              className="toggle-password"
            >
              {showPassword ? "Hide Password" : "Show Password"}
            </Button>
          </div>
        </Row>

        <Button
          className="login-button"
          onClick={handleLogin}
          disabled={remainingAttempts === 0}
        >
          Login
        </Button>
      </Container>
    </div>
  );
};

export default Login;
