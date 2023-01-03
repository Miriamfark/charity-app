import React, { useState } from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'


const Login = () => {

    const [showSignup, setShowSignup] = useState(false)
    

  return (
    <div>
        { showSignup ? (
            <>
                <SignupForm /> 
                <p>Already have an account?</p>
                <p className="btn" onClick={()=>setShowSignup(!showSignup)} >Log In Here</p>
            </>
        ) : (
            <>
                <LoginForm />
                <p>Don't have an account?</p>
                <p className="btn" onClick={()=>setShowSignup(!showSignup)} >Sign Up Here</p>
            </>
        )
        }
    </div>
  )
}

export default Login