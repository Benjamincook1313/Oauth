import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navigation from './Navigation';
import { capitalize } from '../../util';
import { useSelector, useDispatch } from 'react-redux';

export default function UserProfile() {
  const [userData, setUserData] = useState(useSelector(state => state.user));
  const [showAddImg, setShowAddImg] = useState(false);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.patch(`/api/userImage/${userData.id}`, userData)
    .catch(err => console.log({err, message: "Problem updating image url"}));
    dispatch({type: "UPDATE_USER", payload: data.userData});
    alert(data.message);
    setShowAddImg(false);
    navigate(`/`);
  };

  return (
    <>
      <Navigation watch={userData}/>
      <h1>User #{userData.id}</h1>
      <p>Hello {capitalize(`${userData.first} ${userData.last}`)}</p>
      {userData.id && <h3>{userData.email}</h3>}
      {showAddImg?
        <form>
          <button type="button" onClick={() => setShowAddImg(false)}>X</button>
          <label htmlFor="img"> ImageURL </label>
          <input name="img" type="text" value={userData.img} onChange={(e) => setUserData({...userData, img: e.target.value})} />
          <button onClick={(e) => handleSubmit(e)}>submit</button>
        </form>:
        <button onClick={() => setShowAddImg(true)}>{!userData.img? "add image": "update image"}</button>
      }
    </>
  )
}
