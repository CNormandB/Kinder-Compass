import React, { useState } from "react";
import "./Login.css";

function Login() {
  return(
    <section className="LoginPage">
      <div className="Logo">
        <img src="Logo.png" className="LogoImg"/>
        <h1 className="LogoName">Kinder Compass</h1>
        </div>
      <form className="LoginForm">
        <p>Login</p>
        <input placeholder="Email"></input>
        <input placeholder="Password"></input>
        <button> Login </button>
      </form>
    </section>
  );
}

export default Login;