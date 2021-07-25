import React from 'react';
import LoginSignUp from '../components/RegisterPage/LoginSignUp';

function Register() {
    return (
        <div style = {{backgroundColor:'black'}}>
            <LoginSignUp isLogin={false} />
        </div>
    )
}

export default Register
