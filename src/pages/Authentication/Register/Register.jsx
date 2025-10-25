import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const oneSubmit = data => {
        console.log(data)
    }
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className='text-5xl font-bold'>Create an Account</h2>
                    <form onSubmit={handleSubmit(oneSubmit)}>
                        <fieldset className="fieldset">
                            {/* email */}
                            <label className="label">Email</label>
                            <input type="email"
                                {...register('email', { required: true })}
                                className="input"
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
                                className="input"
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
                            <button className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;