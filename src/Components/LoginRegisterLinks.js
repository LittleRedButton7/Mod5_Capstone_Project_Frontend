import React from 'react'
import { Link } from 'react-router-dom';

export default function LoginRegisterLinks() {
    return (
        <div>
            <div className="login-link">
                    <Link to='/login'>Login</Link> 
                </div>
                    <h3>OR</h3>
                <div className="register-link">
                    <Link to='/register'>Register Now</Link> 
                </div>
        </div>
    )
}
