import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function UserProfile() {
  const { id } = useParams;

  const [userData, setUserData] = useState({});

  const getUserData = async () => {
    const { data } = await axios.get(`/api/user/${id}`)
    .catch((err) => console.log(err.message));
    setUserData(data);
  } 

  useEffect(() => {
    getUserData();
  }, []);

  console.log(userData);
  return (
    <>
      <h1>Profile</h1>
      {userData.id && <h3>{userData.email}</h3>}
      <p>Hello world</p>
    </>
  )
}
