import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const oneSubmit = data => {
        console.log(data)
    }
    return (
        <div>
            <div className="card w-full max-w-sm shrink-0">
                <div className="card-body">
                    <h2 className='text-4xl font-bold'>please Login</h2>
                    <form onSubmit={handleSubmit(oneSubmit)}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input
                                type="email" {...register('email')}
                                className="input w-full"
                                placeholder="Email" />

                            <label className="label">Password</label>
                            <input
                                type="password"
                                {...register("password", { required: true, minLength: 6 })}
                                className="input w-full"
                                placeholder="Password" />
                            {
                                errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>
                            }
                            {
                                errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters or longer</p>
                            }

                            <div><a className="link link-hover">Forgot password?</a></div>

                            
                            <button className="btn bg-[#CAEB66]  text-black font-bold  mt-4">Register</button>
                        </fieldset>
                        <p><small> New to this website? <Link className='text-blue-500 font-bold text-sm' to="/register"> register</Link></small></p>
                            <SocialLogin></SocialLogin>
                    
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;