import React, { useState } from 'react'

export default function login() {

  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hit handleSubmit");
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="email" >email</label>
        <input name="email" type="text" placeholder='johndoe@email.com'/>
        <br />
        <label htmlFor="password" >password</label>
        <input name="password" type={show? "text": "password"} placeholder='AsdF1234!'/>
        <br />
        <label htmlFor="show">show password</label>
        <input name="show" type="checkbox" value={show} onChange={() => setShow(!show)}/>
        <br />
        <button onClick={(e) => handleSubmit(e)}>submit</button>
      </form>
    </div>
  )
}
