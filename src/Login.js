import { auth } from "./firebase";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => history.push("/"))
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="1"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
          />

          <h5>Password</h5>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
          />

          <button onClick={signIn} className="login__signInButton">
            Sign in
          </button>
        </form>
        <p>
          By signinig-in you agree to the AMAZON FAKE CLONE Condition of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads{" "}
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
