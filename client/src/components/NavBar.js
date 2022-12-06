import React from 'react';
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
        <Link to={'/logout'}>Log Out</Link>
        <Link to={'/recipients'}>Recipients</Link>
    </div>
  )
}

export default NavBar