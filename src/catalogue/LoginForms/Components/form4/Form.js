import { useContext } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

import "./index.css";
import Workingcontext from "../../../../contexts/workngalert/workingcontext";

function LoginForm4() {
  const mycontext = useContext(Workingcontext);
  return (
    <div className="form-4-div">
      <form className="form-4-form">
        <button className="form-4-fb-btn">
          <FacebookIcon style={{marginRight:'8px'}} /> Facebook
        </button>
        <button className="form-4-google-btn">
          <GoogleIcon style={{marginRight:'8px'}} />
          <span> </span>
          <span style={{ color: "#4885ed" }}>G</span>
          <span style={{ color: "#db3236" }}>o</span>
          <span style={{ color: "#f4c20d" }}>o</span>
          <span style={{ color: "#4885ed" }}>g</span>
          <span style={{ color: "#3cba54" }}>l</span>
          <span style={{ color: "#db3236" }}>e</span>
        </button>
        <p>Or</p>
        <input type="email" placeholder="Enter Email or Username" />
        <input type="password" placeholder="Enter Password" />
        <br />
        <button
          onClick={(event) => {
            event.preventDefault();
            mycontext.customtoast("website in development state ", "warn");
          }}
          className="form-4-btn"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm4;
