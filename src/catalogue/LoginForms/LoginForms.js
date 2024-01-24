import React, { useEffect } from "react";

import "./LoginForms.css";
import Form1 from "./Components/form1";
import Form2 from "./Components/form2";
import Form3 from "./Components/form3";
import Form4 from "./Components/form4";

function LoginForms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="login-forms">
      <h1>Login Forms</h1>
      <Form1 />
      <Form2 />
      <Form3 />
      <Form4 />
    </div>
  );
}

export default LoginForms;
