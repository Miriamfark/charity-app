import { useState } from 'react';

const SignupForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

  return (
    <div>
        <form>
            <label>Username
                <input 
                type="text"
                placeholder="Type your name here..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                ></input>
            </label>
            <label>Password
                <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ></input>
            </label>
            <label>Confirm Password
                <input 
                type="password"
                placeholder="Password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                ></input>
            </label>
            <input type="submit"></input>
        </form>
    </div>
  )
}

export default SignupForm