import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes,Route,NavLink,Outlet} from "react-router-dom";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";

function App() {
  return (
    <div className="App">
      
       <Routes>
       <Route path="/screen1" element={<Screen1/>}/> 
       <Route path="/screen2" element={<Screen2/>}/> 
       </Routes>
       <Outlet/>
    </div>
  );
}

export default App;
