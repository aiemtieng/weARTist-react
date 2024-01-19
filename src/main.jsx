import React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home/Home.jsx";
import ForgotPasswordPage from "./component/Login/ForgotPassword/ForgotPasswordPage.jsx";
import SignUpPage from "./component/Login/SignUp/SignUpPage.jsx";
import LoginPage from "./component/Login/LoginPage.jsx";
import AboutUs from "./component/Home/AboutUs/AboutUs.jsx";
import Commission from "./component/Commission/Commission.jsx";
import { UserAuthContextProvider } from "./Context/UserAuthContext.jsx";
import AboutEmmaPage from "./component/AboutMe/EmmaPage/AboutEmmaPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "forgotpasswordpage",
    element: <ForgotPasswordPage />,
  },
  {
    path: "signuppage",
    element: <SignUpPage />,
  },
  {
    path: "backtologinpage",
    element: <LoginPage />,
  },
  {
    path: "loginpage",
    element: <LoginPage />,
  },
  {
    path: "commissionpage",
    element: <Commission />,
  },
  {
    path: "AboutEmmaPage",
    element: <AboutEmmaPage/>
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  </React.StrictMode>
);
