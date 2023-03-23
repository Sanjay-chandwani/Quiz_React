import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail ]= useState('');
  const [user , setuser] = useState([])
  const [go,setGo] =useState(true);
 

  const handleSubmit = (event) => {
    event.preventDefault();
    const userdetails ={
      name:username,
      email:email,
      password:password
    }
    setuser([...user,userdetails])
    setGo(false)
    alert("Registered Succesfully")
    
  };
  useEffect(()=>{
    let a=JSON.parse(localStorage.getItem("userdetails"))
    setuser(a)
  },[])
  useEffect(() => {
    localStorage.setItem("userdetails" , JSON.stringify(user))
  } , [user])
  if(go){
    return (
      <div className="register-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email:</label>
            <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }

  else{
    return (
      <Login/>
    )
  }

}

export default Register;
