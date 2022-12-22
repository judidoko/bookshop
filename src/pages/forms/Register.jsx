import React, { useState } from "react";
import "./Forms.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Register = () => {
  // useState for Email and password
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (email.trim() === "") return toast.error("Email is required");
    if (username.trim() === "") return toast.error("Username is required");
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
        <h1 className="form_title">Create your account</h1>
        <form onSubmit={formSubmitHandler} className="form" action="#">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="Email"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            value={username}
            placeholder="username"
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
              className="bi bi-eye-slash-fill show__password-icon-register"
            ></i>
          ) : (
            <i
              onClick={showPasswordHandler}
              className="bi bi-eye-fill show__password-icon-register"
            ></i>
          )}
          <button className="form_btn">Login</button>
        </form>
        <div className="form_footer">
          Already have an account?
          <Link to="/login" className="forms_link">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
