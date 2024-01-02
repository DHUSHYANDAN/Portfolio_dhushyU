import './base/main.css'
import './base/_hero.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/contact/' element={<Contact/>} />
        </Routes>
    </BrowserRouter>
)
