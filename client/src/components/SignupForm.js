import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { signupUser } from "../redux/usersSlice"

function SignupForm({ setUser }) {

    const dispatch = useDispatch()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        const user = {
            username,
            password,
            passwordConfirmation
        }
        dispatch(signupUser(user))
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
                    <label>Confirm Password</label>
                    <input 
                        type="password"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                     ></input>
                </div>
                <div className="input-field col s8">
                    <input className="btn" type="submit" value="Sign Up" />
                </div>
            </div>
        </form>
    </div>
  )
}

export default SignupForm