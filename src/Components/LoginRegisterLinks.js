import React from 'react'
import { Link } from 'react-router-dom';

export default function LoginRegisterLinks() {
    return (
        <div className="home-page-login-form">
            <div className="login-link">
                    <Link to='/login'>Login</Link> 
                </div>
                    <h3>OR</h3>
                <div className="register-link">
                    <Link to='/register'>Register Now</Link> 
                </div>
                <div className="forgot-password-link">
                    <Link to='/'>Forgot Password</Link> 
                </div>
        </div>
    )
}
