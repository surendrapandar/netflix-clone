import React from 'react'; 
import ReactDOM from 'react-dom/client';
import App from './componets/App'
import Search from './componets/Search';
import "./componets/index.css";
import Homescreen from './componets/Homescreen';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './componets/Login/Login';
import Sign_up from './componets/Sign_up/signup';
import Landing_page from './componets/Landing_page/Landing_page';
import {UserInfo} from "./context/UserContext"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
<UserInfo>
<Router>
    <Routes>
      <Route path='/profile' element={<Homescreen />}></Route>
      <Route path='/Home' element={<App />}></Route>
      <Route path='/search' element={<Search />}></Route>
      <Route path='/login' element={<Login />}></Route> 
      <Route path='/sign_up' element={<Sign_up />}></Route> 
      <Route path='/netflix-clone' element={<Landing_page />}></Route> 
    </Routes>
    </Router>
</UserInfo>
  
);