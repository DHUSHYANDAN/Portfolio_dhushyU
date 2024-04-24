import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './css/index.css'
import './css/hero.css'
import './css/main.css'
import './css/input.css'

import HomePage from './pages/HomePage';
import HomePage2 from './pages/HomePage2';
import HomePage3 from './pages/HomePage3';
import HomePage4 from './pages/HomePage4';
import ContactPage from './pages/ContactPage';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/about' element={<HomePage2 />} />
          <Route path='/projects' element={<HomePage3 />} />
          <Route path='/contactme' element={<HomePage4 />} />
          <Route path='/contact' element={<ContactPage />} />
          
          


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;