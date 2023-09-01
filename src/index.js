import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './componets/App'
import "./componets/index.css";
import Homescreen from './componets/Mylist';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <Router>
    <Routes>
      <Route path='/netflix-clone' element={<Homescreen />}></Route>
      <Route path='/Home' element={<App />}></Route>
    </Routes>
    </Router>
  
);