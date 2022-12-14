import React from 'react';
import { Link } from "react-router-dom";


const NavBar = ({ setUser }) => {

    function handleLogout() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              setUser(null);
            }
          })
    } 

  return (
    <div>
        <p className="btn navlink" onClick={handleLogout} >Log Out</p>
        <Link className="navlink" to={'/recipients'}>All Recipients</Link>
        <Link className="navlink" to={'/me/recipients'}>My Recipients</Link>
        <Link className="navlink" to={'/me/donations'}>My Donations</Link>
    </div>
  )
}

export default NavBar