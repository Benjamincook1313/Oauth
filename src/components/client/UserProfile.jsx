import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navigation from './Navigation';

export default function UserProfile() {
  const { id } = useParams;

  const [userData, setUserData] = useState({});

  const getUserData = async () => {
    const { data } = await axios.get(`/api/user`)
    .catch((err) => console.log(err.message));
    setUserData(data);
  } 

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <Navigation />
      <h1>Profile</h1>
      {userData.id && <h3>{userData.email}</h3>}
      <p>Hello world</p>
    </>
  )
}
