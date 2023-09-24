import React, { useState, useEffect } from 'react';
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';
import {auth} from "../firebase_auth/firebase-config"
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import {useUser} from "../../context/UserContext"

function Login() {

  const { SetuserEmail } = useUser()

  const [loginEmail, setLoginEmail] = useState()
  const [loginPasswrod, setloginPasswrod] = useState()

  const [userLogin, setUserLogin] = useState(false)

  const navigate  = useNavigate();

  useEffect(() => {
    if (userLogin) {
      navigate("/profile"); // Redirect to the profile page when userLogin becomes true
    }
  }, [userLogin, navigate ]);

  const Login_call = async () => {
    try{
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPasswrod)
      setUserLogin(true) 
      SetuserEmail(user._tokenResponse.email) 
      console.log("Login Succesfully")
      console.log(user._tokenResponse.email)


    }catch(error){
      console.log(error.message)
    }
  }



  return (
    <div className='login_page'>
<div class="container">
  <Link to="/sign_up"> <button type="submit" class="sign_up_btn btn btn-danger">
    Sign Up
  </button></Link>
</div>
      <form className='login_form'>
        <div className="form-group">
          <label className='email_label' htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(event) => {
              setLoginEmail(event.target.value)
            }}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label className='password_label' htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(event) => {
              setloginPasswrod(event.target.value)
            }}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
          Agree on Terms and Conditions
          </label>
        </div>
        <Link to={userLogin && "/profile"}><button type="submit" className="login_btn btn btn-danger" onClick={() =>Login_call()}>
          Login
        </button></Link>
      </form>
    </div>
  );
}

export default Login;
