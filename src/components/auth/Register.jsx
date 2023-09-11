import React, {useState} from 'react';
import { checkPassword } from '../../util';

export default function Register() {

  const [show, setShow] = useState(false);
  const [verify, setVerify] = useState('');

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verified = checkPassword(pass, verify);

    if(verified.status){
      setLoading(() => true);
      const { data } = await axios.post("/register", {}).catch(err => console.log(err));
      alert(data.message);
    }else{
      alert(verified.error);
    }
  }
  
  return (
    <div>
      <h1>Register</h1>
      {loading? 
        <h3>Loading...</h3>:
        <form>
          <label htmlFor="email" >email</label>
          <input name="email" type="text" placeholder='johndoe@email.com'/>
          <br />
          <label htmlFor="password" >password</label>
          <input name="password" type={show? "text": "password"} placeholder='AsdF1234!' onChange={(e) => setPass(e.target.value)}/>
          <br />
          <span>( * 8 character, 1 uppercase, 1 special, no spacing)</span>
        {pass &&
            <>
              <br />
              <label htmlFor="verify" >verify</label>
              <input name="verify" type={show? "text": "password"} onChange={(e) => setVerify(e.target.value)}/>
            </>
          }
          <br />
          <label htmlFor="show">show password</label>
          <input name="show" type="checkbox" value={show} onChange={() => setShow(!show)}/>
          <br />
          <button onClick={(e) => handleSubmit(e)}>submit</button>
        </form>
      }
    </div>
  )
}
