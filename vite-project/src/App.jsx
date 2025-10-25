import { useState } from 'react'
import Navbars from './Navbars.jsx';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import Allcharacters from './Allcharacters.jsx';
import "./index.css";


function App() {
  

  return (
    
    <BrowserRouter>
    <Navbars/>
    <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path='/allcharacters' element={<Allcharacters/>}></Route>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
