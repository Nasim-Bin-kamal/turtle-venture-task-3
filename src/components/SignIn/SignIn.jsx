import React from 'react';
import './SignIn.scss';
import { useAuth0 } from "@auth0/auth0-react";

const SignIn = () => {
    const { loginWithRedirect, logout } = useAuth0()
    return (
        <div className='signInCard'>
            <button onClick={() => loginWithRedirect()} className='btnSignIn'>Sing In</button>
            <button onClick={() => logout()} className='btnSignIn'>Sing Out</button>
        </div>
    );
};

export default SignIn;