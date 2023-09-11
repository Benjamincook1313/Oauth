import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navigation from './Navigation';
import { capitalize } from '../../util';

export default function UserProfile() {
  const { id } = useParams;
  const [userData, setUserData] = useState({});
  
  const navigate = useNavigate();

  const getUserData = async () => {
    const { data } = await axios.get(`/api/user`)
    .catch((err) => console.log(err.message));
    setUserData(data);
  } 

  useEffect(() => {
    getUserData();
    // if(id < 1) navigate("/");
  }, []);

  // console.log(capitalize(userData.first));
  return (
    <>
      <Navigation />
      <h1>User #{userData.id}</h1>
      <p>Hello {userData.first} {userData.last}</p>
      {userData.id && <h3>{userData.email}</h3>}
      <p>Hello world</p>
    </>
  )
}
