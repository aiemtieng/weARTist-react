import React, { useState } from "react";
import "./SignUpPage.css";
import SignUpBackground from "../../../assets/image/LoginBackground.png";
import GoogleIcon from "../../../assets/image/google.png";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../Context/UserAuthContext";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/loginpage");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="SignUpPage">
      <div className="SignUpBackground">
        <img src={SignUpBackground} alt="SignUpBG"></img>
      </div>

      <div className="SignUpText">
        <h3 className="ProjectNameText">weARTist</h3>
        <h3 className="TextSignUp">SIGN UP</h3>
        {error && <div className="AlertDanger">{error}</div>}
        <svg className="LineUnderSignUpText" width="740" height="10">
          <line
            x1="0"
            y1="5"
            x2="740"
            y2="5"
            style={{ stroke: "white", strokeWidth: "3" }}
          />
        </svg>
        
        <form className="SignUpTextInput" onSubmit={handleSubmit}>
          <h3 className="TextSignUpEmail">Email</h3>
          <input
            className="SignUpEmailInput"
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
          <h3 className="TextSignUpPassword">Password</h3>
          <input
            className="SignUpPasswordInput"
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

          <div className="SignUpButtonLogin">
            <button
              className="SignUpLoginButton"
              variant="primary"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>

      <div className="SignUpLoginNow">
        <h3 className="TextAlreadyHaveAcc">Already have an account ?</h3>
        <Link to="/backtologinpage" className="SignUpLinkLoginNow">
          Login Now
        </Link>
      </div>

      <div className="SignUpButtonLoginWithGoogle">
        <h3 className="TextOr">or</h3>
        <button className="SignUpLoginWithGoogleButton">
          <img src={GoogleIcon} alt="GoogleIcon"></img>
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
}

export default SignUpPage;
