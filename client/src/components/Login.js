import React, { useState } from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'


const Login = ({ setUser }) => {

    const [showSignup, setShowSignup] = useState(false)
    

  return (
    <div>
        { showSignup ? (
            <>
                <SignupForm setUser={setUser} /> 
                <p>Already have an account?</p>
                <p className="btn" onClick={()=>setShowSignup(!showSignup)} >Log In Here</p>
            </>
        ) : (
            <>
                <LoginForm setUser={setUser} />
                <p>Don't have an account?</p>
                <p className="btn" onClick={()=>setShowSignup(!showSignup)} >Sign Up Here</p>
            </>
        )
        }
    </div>
  )
}

export default Login