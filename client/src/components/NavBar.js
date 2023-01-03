import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from '../redux/usersSlice';


const NavBar = () => {

  const dispatch = useDispatch()

    function handleLogout() {
        dispatch(logoutUser())
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