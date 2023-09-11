import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  width: 80vw;
  justify-content: space-evenly;
  background-color: green;
  position: fixed;
  top: 20px;
  right: 10%;
`;

export default function Navigate() {


  
  return (
    <Nav>
      <Link to="/" >Home</Link>
      <Link to="/login" >Login</Link>
      <Link to="/register" >Register</Link>
    </Nav>
  )
}
