import React from 'react'
import "./Homescreen.css"
import  profile1 from "./profile-icon-1.svg"
import  profile2 from "./profile-icon-2.svg"
import  profile3 from "./profile-icon-3.svg"
import  profile4 from "./profile-icon-4.svg"
import  profile5 from "./profile-icon-5.svg"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Homescreen() { 
  return (
    <div className='hole'>
    <div className='whois'>
      <h1 className='profile_text'>Who's watching?</h1>
    </div>
      <div className='Homescreen'>
      <Link to="/Home" ><img className='Home_profile' src={profile1}></img></Link>
      <Link to="/Home" ><img className='Home_profile' src={profile2}></img></Link>
      <Link to="/Home" ><img className='Home_profile' src={profile3}></img></Link>
      <Link to="/Home" ><img className='Home_profile' src={profile4}></img></Link>
      <Link to="/Home" ><img className='Home_profile' src={profile5}></img></Link>
      
      {/* <img className='Home_profile' src={profile1}></img>
      <img className='Home_profile' src={profile2}></img>
      <img className='Home_profile' src={profile3}></img>
      <img className='Home_profile' src={profile4}></img>
      <img className='Home_profile' src={profile5}></img> */}
      </div>
    </div>
  )
}

export default Homescreen
