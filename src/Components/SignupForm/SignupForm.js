import React from "react";
import "./SignupForm.css";

function SignupForm() {
  return (
    <div className="wrapper">
      <div id="tryIt">
        Try it free 7 days
        <div id="then">then $20/mo. thereafter</div>
      </div>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button type="submit">CLAIM YOUR FREE TRIAL</button>
      </form>
      <div className="foot">
        {" "}
        By clicking the button, you are agreeing to our Terms and Services
      </div>
    </div>
  );
}

export default SignupForm;
