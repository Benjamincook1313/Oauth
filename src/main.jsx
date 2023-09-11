import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import styled from "styled-components";
import App from './App.jsx';
import Login from "./components/auth/login.jsx";
import Register from "./components/auth/Register"

// STYLES
const Nav = styled.nav`
  display: flex;
  width: 80vw;
  justify-content: space-evenly;
  background-color: green;
  position: fixed;
  top: 20px;
  right: 10%;
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <Nav>
          <Link to="/" >Home</Link>
          <Link to="/login" >Login</Link>
          <Link to="/register" >Register</Link>
        </Nav>
      </header>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
