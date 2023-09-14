import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/auth/login.jsx';
import Register from './components/auth/Register';
import UserProfile from './components/client/UserProfile';
import Logout from './components/auth/Logout';
import Home from './components/client/Home';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/user/:id" element={useSelector(state => state.user).id ?<UserProfile />: <Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
