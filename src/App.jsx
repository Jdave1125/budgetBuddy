
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Dashboard from './comps/Dashboard';

import './App.css'

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <Router>
      <div className='App'>
        <Routes>
          {/* Set explicit route paths */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          {/* Use element prop instead of component prop */}
          {isLoggedIn ? <Route path="/dashboard" element={<Dashboard />} /> : <Route path="/" element={<Login />} />}
        </Routes>
      </div>
    </Router>
  )
}
export default App
