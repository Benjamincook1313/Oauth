import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import App from './App.jsx';
import Login from "./components/auth/login.jsx";
import Register from "./components/auth/Register";
import UserProfile from './components/client/UserProfile';
import Navigation from "./components/client/Navigation.jsx";
import Footer from "./components/client/Footer.jsx";
import Logout from './components/auth/Logout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
