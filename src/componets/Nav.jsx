import React, { useEffect, useState } from 'react'
import "./Nav.css"
import Netflixlogo from "./netflix.png"
import user1 from "./profile-icon-5.svg"
import Mylist from './Homescreen'




function Nav() {
  const [show, showHandle] = useState(false)

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
    <i class="fa-solid fa-magnifying-glass nav_items"></i>
    <a className='nav_items' href='#' >Children</a>
    <i class="fa-solid fa-bell nav_items"></i>
    <img className='nav_items user_logo' src={user1}></img>
    <i class="fa fa-caret-down nav_items"></i>
    </div>
      </div>
  )
}

export default Nav
 