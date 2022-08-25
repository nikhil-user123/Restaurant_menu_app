import React from 'react';
import {Route, Routes} from 'react-router-dom'
import About from "./About"
import Contact from "./Contact"
import Menu from './Menu'
// import './App.css';

function App() {
  return (
    <>
    <Menu />
    <Routes>
    <Route exact path='/' element={<About />}/>
    <Route exact path='/contact' element={<Contact />}/>
    <Route elememt={Error} />
    </Routes>
    </>
  );
}

export default App;
