import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser } = useAuth()

    const oneSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <div className="card w-full max-w-sm">
                <div className="card-body">
                    <h2 className='text-4xl font-bold'>Create Account</h2>
                    <form onSubmit={handleSubmit(oneSubmit)}>
                        <fieldset className="fieldset">
                           
                            <label className="label">Name</label>
                            <input type="name "
                                {...register('name', { required: true })}
                                className="input w-full"
                                placeholder="Name" />
                                {/* email */}
                            <label className="label">Email</label>    
                            <input type="email "
                                {...register('email', { required: true })}
                                className="input w-full"
                                placeholder="Email" />
                            {
                                errors.email?.type === 'required' && <p
                                    className=' text-red-500'>
                                    Email is required
                                </p>
                            }
                            {/* password */}
                            <label className="label">Password</label>
                            <input type="password"
                                {...register("password", { required: true, minLength: 6 })}
                                className="input w-full"
                                placeholder="Password" />
                            {
                                errors.password?.type === 'required' && <p
                                    className=' text-red-500'>
                                    password is required </p>
                            }
                            {
                                errors.password?.type === 'minLength' &&
                                <p className='text-red-500'>Password must be 6 characters or longer</p>
                            }

                            <div><a className="link link-hover">Forgot password?</a></div>
                           
                            <button className="btn bg-[#CAEB66]  text-black font-bold  mt-4">Register</button>
                        </fieldset>
                        <p><small> Already have an account?  <Link className='text-blue-500 font-bold text-sm' to="/login"> login</Link></small></p>
                    
                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;