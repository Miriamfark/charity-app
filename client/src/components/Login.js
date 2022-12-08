import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SignupForm from './SignupForm'


const Login = ({setUser}) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              password
            }),
          })
            .then((r) => {
                if(r.ok){
                    r.json().then((r)=> setUser(r))
                }
                else {
                   r.json().then(e => {
                    setErrors(Object.entries(e.error).flat())
                })
                } 
            }) 
    }

  return (
    <div>
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
        <div>
            <p>Don't have an account?</p>
            <Link to={"/signup"} element={<SignupForm />}>Sign Up!</Link>
        </div>
        
    </div>
  )
}

export default Login