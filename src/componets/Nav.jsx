import React, { useEffect, useState } from 'react'
import "./Nav.css"
import Netflixlogo from "./netflix.png"
import user1 from "./profile-icon-5.svg"
import Mylist from './Homescreen'
import { Link, useNavigate } from 'react-router-dom'
import {useUser} from "../context/UserContext"
import {  signOut } from "firebase/auth";
import {auth} from '../componets/firebase_auth/firebase-config';




function Nav() {

  const navigate = useNavigate();
 
  const handleLogout = () => {               
      signOut(auth).then(() => {
      // Sign-out successful.
          navigate("/login");
          console.log("Signed out successfully")
      }).catch((error) => {
        console.log(error.message)
      });
  }
  const [show, showHandle] = useState(false)
  const { userEmail } = useUser();

  useEffect(() => {
    window.addEventListener("scroll", () =>{
      if (window.scrollY > 100) {
        showHandle(true)
      }
      else{
        showHandle(false)
      }
    })
    return() => {
      window.removeEventListener("scroll", showHandle);
    }
  }, []);

  return (
    
    // <BrowserRouter>
    // <div className={`'container-navbar' ${show && 'nav_black'`}>
    <div className={`container-navbar ${show && "nav_black"}`}>
    <div className='flex'> 
    <img className='nav_items' src={Netflixlogo}></img>
      <a className='nav_items' href='#'>Home</a>
      <a className='nav_items' href='#tvshow'>Tv Shows</a>
      <a className='nav_items' href='#toprated'>Movies</a>
      <a className='nav_items' href='#popular'>Popular</a>
      <a className='nav_items' href='mylist'>My List</a>
      <a className='nav_items' href='#'>Browser</a>
      <a className='nav_items' href='#'>Languge</a>
      </div>
    <div className='flex leftside_nav'>
    <input className='search_bar' placeholder='Search'></input>
    <Link to="/Search"><i class="fa-solid fa-magnifying-glass nav_items"></i></Link>
    <a className='nav_items' href='#' >{userEmail ? userEmail.slice(0, 8) : "Guest"}</a>
    <i class="fa-solid fa-bell nav_items"></i>
    <Link to="/netflix-clone"><img className='nav_items user_logo' src={user1}></img></Link>
    {/* <i class="fa fa-caret-down nav_items"></i> */}
    <Link to="/sign_up"> <button type="submit" class="log_out_btn btn btn-danger" onClick={() => {
      handleLogout()
    }}>
    Log Out
  </button></Link>
    </div>
      </div>   
  )
}

export default Nav
 