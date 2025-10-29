import React from 'react';
import useAuth from './../../../hooks/useAuth';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    const { signInWithGoogle } = useAuth()
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className='text-center'>
            <div className="divider">Or</div>
            <button onClick={handleGoogleSignIn} className="btn text-black border-[#e5e5e5] w-full bg-gray-200">
                <FcGoogle />
                Login with Google
            </button>
        </div>
    );
};

export default SocialLogin;