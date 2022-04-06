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
        <input
          type="text"
          required="First Name cannot be empty"
          placeholder="First Name"
        />
        <input
          type="text"
          required="Last Name cannot be empty"
          placeholder="Last Name"
        />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button type="submit">CLAIM YOUR FREE TRIAL</button>
      </form>
      <div className="foot">
        By clicking the button, you are agreeing to our{" "}
        <a id="terms" href="https://www.w3schools.com">
          Terms and Services
        </a>
      </div>
    </div>
  );
}

export default SignupForm;
