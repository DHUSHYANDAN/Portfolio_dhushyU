import './css_components/main.css'
import './css_components/_hero.css'
//import './css_components/index.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/contact'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} exact/>
        <Route path='/contact' element={<Contact />} exact    />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
