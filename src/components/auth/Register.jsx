import React, { useState,  } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkPassword } from '../../util';
import axios from "axios";
import Navigation from '../client/Navigation';

export default function Register() {

  const [show, setShow] = useState(false);
  const [verify, setVerify] = useState('');

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const reset = () => {
    setShow(false);
    setVerify('');
    setEmail('');
    setPassword('');
    setLoading(() => false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordVerified = checkPassword(password, verify);

    if(!first || !last || !email || !password || !verify){
      alert("Please enter all fields");
      return;
    }

    if(passwordVerified.status){
      setLoading(() => true);
      const { data } = await axios.post("/api/register", {first, last, email, password})
      .catch(err => console.log(err) && setLoading(() => false));
      alert(data.message);
      reset();
      navigate(`/login`);
    }else{
      setLoading(() => false);
      alert(passwordVerified.error);
    }
  }
  
  return (
    <>
      <Navigation />
      <h1>Register</h1>
      {loading? 
        <h3>Loading...</h3>:
        <form>

          <label htmlFor="first">first </label>
          <input 
            name="first" 
            value={first} 
            type="text" 
            placeholder='john' 
            onChange={(e) => setFirst(e.target.value)}
          />
          <br />

          <label htmlFor="last">last </label>
          <input 
            name="last" 
            value={last} 
            type="text" 
            placeholder='doe' 
            onChange={(e) => setLast(e.target.value)}
          />
          <br />

          <label htmlFor="email">email </label>
          <input 
            name="email" 
            value={email} 
            type="text" 
            placeholder='johndoe@email.com' 
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <label htmlFor="password" >password </label>
          <input name="password" 
            value={password} 
            type={show? "text": "password"} 
            placeholder='AsdF1234!' 
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          <span>( * 8 character, 1 uppercase, 1 special, no spacing)</span>
        {password &&
            <>
              <br />
              <label htmlFor="verify" >verify </label>
              <input name="verify" type={show? "text": "password"} value={verify} onChange={(e) => setVerify(e.target.value)}/>
            </>
          }
          <br />

          <label htmlFor="show">show password </label>
          <input name="show" type="checkbox" value={show} onChange={() => setShow(!show)}/>
          <br />
          <button onClick={(e) => handleSubmit(e)}>submit</button>
        </form>
      }
    </>
  )
}
