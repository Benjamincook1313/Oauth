import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import App from './App.jsx';
import Login from "./components/auth/login.jsx";
import Register from "./components/auth/Register";
import UserProfile from './components/client/UserProfile';
import Navigate from "./components/client/Navigate.jsx";
import Footer from "./components/client/Footer.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <Navigate />
      </header>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
