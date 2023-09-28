import React, { useState } from 'react'

const Login = (props) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')


    return (
        <div>

            <form className="form">
                <p className="form-title">Sign in to your warehouse</p>
                <div className="input-container">
                    <input placeholder="Enter email" type="text" onChange={(e) => {
                        setName(e.target.value)
                    }} />

                </div>
                <div className="input-container">
                    <input placeholder="Enter password" type="password" onChange={(e) => {
                        setPassword(e.target.value)
                    }} />


                </div>
                <button className="submit" type="submit" onClick={(e) => {
                    e.preventDefault()
                    console.log("hello");
                    props.handleLogin(name, password)
                }}>
                    Sign in
                </button>

                <p className="signup-link">
                    No account?
                    <a   >Sign up</a>
                </p>
            </form>

        </div>
    )
}

export default Login