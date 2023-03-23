import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <ul>
            <li >
                <Link to="/Register">Register</Link> 
                
            </li>

            <li>
            <Link to="About">About</Link> 
            </li>

            <li>
                <Link to="Quiz">Home</Link>
            </li>


            <li>

              <Link to="Login">Login</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header