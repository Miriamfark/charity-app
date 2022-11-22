import { useState } from 'react';
// import LoginForm from './LoginForm';

const SignupForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

  return (
    <div className="row container valign-wrapper">
        <form className="col s8">
            <div className="row">
                <div className="input-field col s8">
                    <label>Username </label>
                    <input 
                        type="text"
                        // placeholder="Type your name here..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    ></input>
                </div>
                <div className="input-field col s8">
                    <label>Password</label>
                    <input 
                        type="password"
                        // placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div className="input-field col s8">
                    <label>Confirm Password</label>
                    <input 
                        type="password"
                        // placeholder="Password"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                     ></input>
                </div>
                <div className="input-field col s8">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Sign Up
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SignupForm