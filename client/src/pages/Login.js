import React from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
  const history = useHistory();
  function toDashboard(e) {
    e.preventDefault();
    history.push(`/dashboard`);
  }
  return (
    <section className="sectionLogin">
      <div className="content">
        <div className="login">
          <div className="logo">
            <img
              src={process.env.PUBLIC_URL + "025-dna.png"}
              alt=""
              className="logoImg"
            />
          </div>
          <h2>Saka Armor</h2>
          <input type="text" placeholder="Employee ID" />
          <input type="password" placeholder="Password" />
          <button onClick={(e) => toDashboard(e)}>Login</button>
        </div>
        <div className="link">
          <a href="">Forgot Password</a>
          <a href="">Change Tenant</a>
        </div>
      </div>
    </section>
  );
}

export default Login;
