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
        <p className="btn" onClick={handleLogout} >Log Out</p>
        <Link to={'/recipients'}>Recipients</Link>
        <Link to={'/recipients/new'}>New Recipient</Link>
    </div>
  )
}

export default NavBar