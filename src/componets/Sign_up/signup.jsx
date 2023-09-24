import React, {useState} from 'react';
import "./signup.css"
import { Link, useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {auth} from "../firebase_auth/firebase-config"


function Sign_up() {
  const navigate = useNavigate()
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [user, setuser] = useState(false)

  onAuthStateChanged(auth, (currentUser) => {
    setuser(currentUser)
  })

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,registerEmail,registerPassword)
        navigate("/login")

        console.log("user created succesfully")
      
      }
      catch(error) {
        console.log(error.message)
    }
  }

  return (
    <div className='login_page'>
<div class="container">
  <Link to="/login"><button type="submit" class="sign_up_btn btn btn-danger">
    Login
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
              setRegisterEmail(event.target.value)
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
              setRegisterPassword(event.target.value)
              
            }}
          />
        </div>
        <div className="form-group">
          <label className='password_label' htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Confirm Password"
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
        <button onClick={() => register() ? setuser(true) : "None" } type="button" className="login_btn btn btn-danger" >
          Register 
        </button>
      </form>
    </div>
  );
}

export default Sign_up;
