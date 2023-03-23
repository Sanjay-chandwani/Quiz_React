import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {
  let [pass, setpass] = useState("");
  let [username, setuser] = useState("");
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    let finalname = JSON.parse(localStorage.getItem("userdetails"))
    console.log(finalname)
    const filtereddta = finalname.filter(data => data.name === username && data.password === pass)
    console.log(filtereddta.length)
    if (filtereddta.length > 0) {
      alert("welcome")
      navigate("/Quiz")
    }
    else {
      alert("wrong credentials")
    }



  }

  return (
    <div>
      <div className='LoginDiv'>

        <form onSubmit={handleSubmit}>
          <input value ={username} onChange={(e)=> setuser(e.target.value)} required type="text" placeholder='Enter your Username'></input>
          <input onChange={(e)=> setpass(e.target.value)}  required type="password" placeholder='Enter your password'></input>

          <button>Login</button>
        </form>

      </div>
    </div>
  )
}

export default Login