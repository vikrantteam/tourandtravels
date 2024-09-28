import React, { useState } from "react";

const signupFormData = [
  {
    id: 0,
    name: "name",
    type: "text",
    ac: "off",
  },
  {
    id: 1,
    name: "email",
    type: "email",
  },
  {
    id: 2,
    name: "contact",
    type: "number",
  },
  {
    id: 3,
    name: "city",
    type: "text",
  },
  {
    id: 4,
    name: "state",
    type: "text",
  },
  {
    id: 5,
    name: "password",
    type: "password",
  },
  {
    id: 6,
    name: "confirm password",
    type: "password",
  },
];

const Signup = () => {
  const [signupData, setSignupData] = useState(signupFormData);
  const [registerDetail, setRegisterDetail] = useState({
    name: "",
    city: "",
    contact: 0,
    email: "",
    state: "",
    passwprd: "",
  });
  const [clear,setClear]=useState(false);
  let pass = "";

  const registerFormInputHandler = (e) => {
    if (e.target.name === "confirm password") {
      pass = e.target.value;
      console.log(pass);
      
    } else {
      setRegisterDetail({ ...registerDetail, [e.target.name]: e.target.value });
    }
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const { name, email, contact, password, city, state } = registerDetail;
    if (
      name == "" ||
      email == "" ||
      contact == "" ||
      password == "" ||
      city == "" ||
      state == ""
    ) {
      alert("please fill to all fields");
    } else {
      if (password !== pass) {
        alert("please check password");
      } else {
        alert("sucess");
      }
    }
  };
  return (
    <>
      <div className="main">
        <form
          action=""
          className="login-card"
          onSubmit={(e) => {
            formSubmitHandler(e);
          }}
        >
          <div className="form-title">
            <h1>Register Now</h1>
          </div>
          {signupData.map((elem) => {

            return (
              <>
                <div className="input-field d-grid " key={elem.id}>
                  <label htmlFor={elem.name}>{elem.name}</label>
                  <input
                    className="register-input"
                    name={elem.name}
                    type={elem.type}
                    id={elem.name}
                    onChange={(e) => registerFormInputHandler(e)}
                    autoComplete={elem.ac}
                  />
                </div>
              </>
            );
          })}
          <button type="submit" className="signin-btn">
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
