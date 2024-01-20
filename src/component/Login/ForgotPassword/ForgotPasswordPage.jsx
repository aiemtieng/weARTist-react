import React from "react";
import "./ForgotPasswordPage.css";
import ForgotPasswordBackground from "../../../assets/image/LoginBackground.png"
import { Link } from "react-router-dom";

function ForgotPasswordPage() {
  return (
    <div className="ForgotPasswordPage">
      <div className="ForgotPasswordBackground">
        <img src={ForgotPasswordBackground} alt="ForgotPasswordBG"></img>
      </div>

      <div className="ForgotPasswordText">
        <Link to="/" className="ProjectNameText">weARTist</Link>
        <h3 className="TextForgotPassword">FORGOT PASSWORD</h3>
        <svg className="LineUnderForgotPasswordText" width="740" height="10">
          <line
            x1="0"
            y1="5"
            x2="740"
            y2="5"
            style={{ stroke: "white", strokeWidth: "3" }}
          />
        </svg>
        <div className="ForgotPasswordTextInput">
          <h3 className="TextForgotPasswordEmail">Email</h3>
          <input
            className="ForgotPasswordEmailInput"
            type="text"
            placeholder="( enter your email )"
          ></input>
          <svg className="LineUnderEmailText" width="740" height="10">
            <line
              x1="0"
              y1="5"
              x2="740"
              y2="5"
              style={{ stroke: "white", strokeWidth: "1.5" }}
            />
          </svg>
        </div>
      </div>

      <div className="ForgotPasswordButtonLogin">
        <button className="ForgotPasswordSendButton">Send</button>
        <Link to="/backtologinpage" className="BackToLoginPage">back</Link>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
