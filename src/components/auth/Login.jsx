import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navigation from '../client/Navigation';

export default function login() {

  const [show, setShow] = useState(false);
  const [user, setUser] = useState({email: '', password: ''});

  const navigate = useNavigate();

  const reset = () => {
    setShow(false);
    setUser
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hit handleSubmit");
    if(!user.email || !user.password) {
      alert("Please enter all fields to submit");
      return;
    }else{
      const { data } = await axios.post("/api/login", user)
      .catch(err => console.log(err));
      navigate(`/user/${data.id}`);
    }
  };

  return (
    <>
      <Navigation />
      <h1>Login</h1>

      <form>
        <label htmlFor="email" >email </label>
        <input 
          name="email" 
          type="text" 
          placeholder='johndoe@email.com'
          value={user.email}
          onChange={e => setUser({...user, email: e.target.value})}
        />
        <br />

        <label htmlFor="password" >password </label>
        <input 
          name="password" 
          type={show? "text": "password"} 
          placeholder='AsdF1234!'
          value={user.password}
          onChange={e => setUser({...user, password: e.target.value})}
        />
        <br />

        <label htmlFor="show">show password </label>
        <input name="show" type="checkbox" value={show} onChange={() => setShow(!show)}/>
        <br />

        <button onClick={(e) => handleSubmit(e)}>submit</button>
      </form>
    </>
  )
}
