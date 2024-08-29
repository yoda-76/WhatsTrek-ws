
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import PrivacyPolicy from './pages/privacy-policy';


function App() {

  return (
    <Router>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
      </nav> */}
      <nav>
        <div className='flex bg-slate-500 p-4 text-white'>
          <Link className='mr-4 p-2 bg-slate-400' to="/">Home</Link>
          <Link className='mr-4 p-2 bg-slate-400' to="/privacy-policy">Privacy Policy</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  )
}

export default App
