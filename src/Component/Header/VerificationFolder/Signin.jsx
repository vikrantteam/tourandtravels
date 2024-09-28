import React, { useState } from "react";
import "../Style/Header.css";
import "../Style/mobile.css";
import { ImCancelCircle } from "react-icons/im";
import { BiShow, BiHide } from "react-icons/bi";
import Alert from "../../OtherComponent/Alert";

const Signin = () => {
  const [checkvisible, setCheckvisible] = useState(true);
  const [checkPassText, setCheckPassText] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signinDetail, setSigninDetail] = useState([]);
  const [alertClass, setAlertClass] = useState(true);
  const [alertData, setAlertData] = useState("");

  const alertFormHandler = () => {
    setAlertClass("none");
    console.log("Close");
  };

  const showHidePasswordHandler = () => {
    if (checkPassText == "password") {
      setCheckPassText("text");
      setCheckvisible(false);
    } else {
      setCheckPassText("password");
      setCheckvisible(true);
    }
  };
  const SubmitFormHandler = (e) => {
    e.preventDefault();
    if (email == "" || password == "") {
      setAlertData("please enter email id OR password");
      setAlertClass(false);
    } else {
      const com = ".com";
      const len = email.length - 4;
      const last = email.slice(len);
      if (last != com) {
        setAlertData("please enter valid email id");
        setAlertClass(false);
      } else {
        const newData = { email: email, password: password };
        setPassword("");
        setEmail("");
        setSigninDetail(newData);
        alert("Login Sucess");
      }
    }
  };

  return (
    <>
      <div className="main">
        <form
          action=""
          className="login-card"
          onSubmit={(e) => SubmitFormHandler(e)}
          style={{ display: alertClass ? "flex" : "none" }}
        >
          <div className="input-field">
            <label htmlFor="email">Email Id</label>
            <input
              type="email"
              id="email"
              value={email}
              autoComplete="off"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="input-field d-flex">
            <label htmlFor="pass">Password</label>

            <input
              type={checkPassText}
              id="pass"
              value={password}
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              type="button"
              className="show-hide-btn"
              onClick={() => {
                showHidePasswordHandler();
              }}
            >
              {checkvisible ? <BiShow className="icon" /> : <BiHide />}
            </button>
          </div>

          <button type="submit" className="signin-btn">
            Sign in
          </button>
        </form>
      </div>
      <div
        className="alert-div"
        style={{ display: alertClass ? "none" : "block" }}
      >
        <ImCancelCircle
          className="alert-cancel"
          onClick={() => {
            alertFormHandler();
          }}
        />
        <div className="alert-content">
          <h1>{alertData}</h1>
        </div>
      </div>
    </>
  );
};

export default Signin;
