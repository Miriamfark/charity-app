import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { userSelector, clearState, loginUser } from '../redux/usersSlice';

const LoginForm = ({ setUser }) => {

    const { isError, errorMessage } = useSelector(userSelector)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if (isError) {
            setErrors(errorMessage)
            dispatch(clearState())
        }
    }, [isError, dispatch, errorMessage])

    function handleSubmit(e) {
        e.preventDefault()
        const user = {
            username,
            password
        }
        dispatch(loginUser(user))
    }

  return (
    <div className="row container valign-wrapper">
        <form onSubmit={handleSubmit} className="col s8">
            <div className="row">
                <div className="input-field col s8">
                    <label>Username </label>
                    <input 
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    ></input>
                </div>
                <div className="input-field col s8">
                    <label>Password</label>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div className="input-field col s8">
                    <input className="btn" type="submit" value="Log In" />
                </div>
            </div>
        </form>
        { errors ? <h5>{errors}</h5> : null }
    </div>
  )
}

export default LoginForm