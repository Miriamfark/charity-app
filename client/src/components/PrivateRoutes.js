import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from '../redux/usersSlice'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({ children }) => {

    const user = useSelector((state) => state.users.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch])

  return user && user ? children : <Navigate to="/login" />
}

export default PrivateRoutes