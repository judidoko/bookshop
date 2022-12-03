import React from "react";
import "./Forms.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="form_wrapper">
        <h1 className="form_title">Login to your account</h1>
        <form className="form" action="#">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" autoComplete="on" />
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
