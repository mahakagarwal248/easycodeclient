import React from "react";
import "./index.css";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PersonIcon from "@mui/icons-material/Person";
import LockOpenIcon from "@mui/icons-material/LockOpen";
// import Workingcontext from "../../../../../../contexts/workngalert/workingcontext";

function LoginForm1() {
  //   const mycontext = useContext(Workingcontext);
  //   const onclicksubmit=(event)=>{
  // event.preventDefault();
  // mycontext.customtoast("website in development state ", "warn");
  //   }
  //   <botton onclick={(event)=>onclicksubmit(event)}>
  return (
    <div className="form-1-div">
      <div>
        <form>
          <div>
            <PersonOutlineOutlinedIcon className="form-1-center-icon" />
          </div>
          <PersonIcon className="form-1-icon" />
          <input type="email" placeholder="E-mail id" />
          <br />
          <LockOpenIcon className="form-1-icon" />
          <input type="password" placeholder="Password" />
          <div className="form-1-info-div">
            <div>
              <input type="checkbox" />
              <span>Remember Me</span>
            </div>
            <span className="form-1-forgot-password">Forgot password?</span>
          </div>
          <button className="form-1-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm1;
