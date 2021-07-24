import React from 'react';
import LoginSignUp from '../components/RegisterPage/LoginSignUp';

function SignIn() {
    return (
        <div style = {{backgroundColor:'black'}}>
            <LoginSignUp isLogin={true} />
        </div>
    )
}

export default SignIn
