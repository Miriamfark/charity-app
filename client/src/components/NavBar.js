import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser, fetchUser } from '../redux/usersSlice';
import { useSelector } from 'react-redux';


const NavBar = () => {

  const user = useSelector((state) => state.users.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

    function handleLogout() {
        dispatch(logoutUser(user.id))
        navigate("/")
    }

    useEffect(() => {
      dispatch(fetchUser())
    }, [dispatch])

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