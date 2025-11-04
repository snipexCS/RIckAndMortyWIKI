import { useState } from 'react'
import Navbars from './Navbars.jsx';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import Allcharacters from './Allcharacters.jsx';
import "./index.css";
import CharacterDetails from './CharacterDetails.jsx';
import Merch from "./Merch.jsx"


function App() {
  

  return (
    
    <BrowserRouter>
    <Navbars/>
    <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path='/allcharacters' element={<Allcharacters/>}></Route>
    <Route path='/allcharacters/:id' element={<CharacterDetails/>}></Route>
    <Route path='/Merch' element={<Merch/>}></Route>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
