import React, { useState } from "react";
import "./LoginPage.css";
import LoginBackground from "../../assets/image/LoginBackground.png";
import GoogleIcon from "../../assets/image/google.png";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Context/UserAuthContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="LoginPage">
      <div className="LoginBackground">
        <img src={LoginBackground} alt="LoginBG"></img>
      </div>

      <div className="LoginText">
        <Link to="/" className="ProjectNameText">weARTist</Link>
        <h3 className="TextLogin">LOGIN</h3>
        <svg className="LineUnderLoginText" width="740" height="10">
          <line
            x1="0"
            y1="5"
            x2="740"
            y2="5"
            style={{ stroke: "white", strokeWidth: "3" }}
          />
        </svg>

        <form className="LoginTextInput" onSubmit={handleSubmit}>
          <h3 className="TextEmail">Email</h3>
          <input
            className="EmailInput"
            type="text"
            placeholder="( enter your email )"
            onChange={(e) => setEmail(e.target.value)}
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
          <h3 className="TextPassword">Password</h3>
          <input
            className="PasswordInput"
            type="text"
            placeholder="( enter your password )"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <svg className="LineUnderPasswordText" width="740" height="10">
            <line
              x1="0"
              y1="5"
              x2="740"
              y2="5"
              style={{ stroke: "white", strokeWidth: "1.5" }}
            />
          </svg>

          <div className="ButtonLogin">
            <button className="LoginButton" variant="primary" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>

      <div className="ForgotPassword">
        <Link to="/forgotpasswordpage" className="LinkForgotPasswordPage">
          forgot password
        </Link>
      </div>

      <div className="SignUp">
        <h3 className="TextNotHaveAcc">Don't have an account ?</h3>
        <Link to="/signuppage" className="LinkSignUpNow">
          Sign Up Now
        </Link>
      </div>

      <div className="ButtonLoginWithGoogle">
        <h3 className="TextOr">or</h3>
        <button className="LoginWithGoogleButton">
          <img src={GoogleIcon} alt="GoogleIcon"></img>
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
