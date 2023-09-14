import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, Routes, BrowserRouter, Link, Navigate } from 'react-router-dom';
import App from './App.jsx';
import Login from "./components/auth/login.jsx";
import Register from "./components/auth/Register";
import UserProfile from './components/client/UserProfile';
import Footer from "./components/client/Footer.jsx";
import Logout from './components/auth/Logout';
import { Provider, useSelector } from 'react-redux';
import store from "./ducks/store";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
        <Footer/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
