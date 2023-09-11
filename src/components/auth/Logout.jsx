import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navigation from '../client/Navigation';

export default function Logout() {

  const navigate = useNavigate();

  const logout = async (opt) => {
    if(opt){
      const { data } = await axios.get("/api/logout")
      .catch(err => console.log(err));
      alert(data.message);
    }
    navigate("/");
  };
  
  return (
    <>
      <Navigation />
      <h1>Logout</h1>
      <h2>Are you sure you want to logout?</h2>
      <br />
      <button onClick={() => logout(true)}>yes </button>
      <button onClick={() => logout(false)}>no </button>
    </>
  )
}
