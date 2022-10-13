import React from 'react';
import About  from './Routes/About';
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import './App.css'


function App(){
  return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path='/' exact={true} element={<Home />}  />
        <Route path='/about' element={<About />} />
        <Route path='/movie-detail'  element={<Detail />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App;