import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './css/index.css'
import './css/hero.css'
import './css/main.css'
import './css/input.css'

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} exact />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;