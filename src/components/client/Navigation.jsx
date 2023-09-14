import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";

const Nav = styled.nav`
  display: flex;
  width: 90vw;
  height: 60px;
  justify-content: space-between;
  background-color: green;
  position: fixed;
  top: 20px;
  right: 5%;
  padding: 0px 20px;
  box-sizing: border-box;
  align-items: center;
`;

const Img = styled.img`
  max-height: 50px;
  width: 50px;
  border-radius: 50%;
  /* border: 2px solid red; */
`;

export default function Navigation() {

  const [userData] = useState(useSelector(state => state.user));

  return (
    <Nav>
      {userData.id && <Link to={`/user/${userData.id}`} >
        <Img src={userData.img} alt="profile"/>
      </Link>
      }
      <Link to="/" >Home</Link>

      {!userData.id? 
        <div>
          <Link to="/login" >Login</Link> / 
          <Link to="/register" > Register</Link>
        </div>:
        <Link to="/logout">Logout</Link>
      }
    </Nav>
  )
}
