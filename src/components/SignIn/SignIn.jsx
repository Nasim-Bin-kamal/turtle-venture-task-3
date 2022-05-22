import React from 'react';
import './SignIn.scss';
import { useAuth0 } from "@auth0/auth0-react";

const SignIn = () => {
    const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } = useAuth0()
    return (
        <div className='signInCard'>

            <button onClick={loginWithPopup} className='btnSignIn'>Sing In</button>
        </div>
    );
};

export default SignIn;