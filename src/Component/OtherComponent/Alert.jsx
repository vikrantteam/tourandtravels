import React from "react";
import "../Header/Style/Header.css";

const Alert = () => {
    const [alertClass, setAlertClass] = useState(true);
    const [alertData, setAlertData] = useState("");

    const alertFormHandler = () => {
        setAlertClass("none");
        console.log("Close");
      };
  return (
    <>
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

export default Alert;
