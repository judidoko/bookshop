import React, { useState } from "react";
import "./Forms.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Login = () => {
  // useState for Email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (email.trim() === "") return toast.error("Email is required");
    if (password.trim() === "") return toast.error("Passwird is required");
  };

  // Show Password Handler
  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <div className="form_wrapper">
        <ToastContainer theme="colored" />
        <h1 className="form_title">Login to your account</h1>
        <form onSubmit={formSubmitHandler} className="form" action="#">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="Password"
            autoComplete="off"
          />
          {showPassword ? (
            <i
              onClick={showPasswordHandler}
              className="bi bi-eye-slash-fill show__password-icon"
            ></i>
          ) : (
            <i
              onClick={showPasswordHandler}
              className="bi bi-eye-fill show__password-icon"
            ></i>
          )}
          <button className="form_btn">Login</button>
        </form>
        <div className="form_footer">
          Don't have an account?
          <Link to="/register" className="forms_link">
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
