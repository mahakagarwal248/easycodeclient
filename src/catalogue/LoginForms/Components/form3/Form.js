import React, { useContext } from "react";
import "./index.css";
import Workingcontext from "../../../../contexts/workngalert/workingcontext";

function LoginForm3() {
  const mycontext = useContext(Workingcontext);
  return (
    <div className="form-3-div">
      <div>
        <form className="form-3-form">
          <h2>Welcome</h2>
          <input type="email" placeholder="&#61447; Enter Email" />
          <br/>
          <input type="password" placeholder="&#61475; Enter Password" />
          <br />
          <button
            onClick={(event) => {
              event.preventDefault();
              mycontext.customtoast("website in development state ", "warn");
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm3;
