import React, { useContext, useState } from 'react';
import form from '../../image/login-form.gif'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import useToken from '../../Hooks/UseToken';

const Login = () => {

    const { loginUser } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [loginUserToken, setLoginUserToken] = useState('');
    const [token] = useToken(loginUserToken);

    if(token){
        navigate('/')
    }

    const handleLogin = (data) => {
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserToken(data.email)
                toast.success('successfull you login !!!!')
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message)
            })
    }

    return (
        <div draggable='true' className="hero md:my-20">
            <div className="hero-content flex-col lg:flex-row">
                <img  src={form} className=" w-full mt-8 md:w-full mx-auto md:-w-1/2 rounded-lg shadow-2xl" alt='' />
                <div className='w-full'>
                    <div className="hero md:w-1/2">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <form className="" onSubmit={handleSubmit(handleLogin)}>
                                <div className="form-control w-full md:w-full ">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email")} className="input input-bordered input-primary w-full md:w-96" required />
                                </div>


                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password")} className="input input-bordered input-primary w-full md:w-96" required />
                                </div>
                                <p className='mt-4 text-dark text-justify'>Have you not registered yet? <Link to={'/register'} className='font-bold'>Register</Link></p>
                                <input className='mt-4 w-full md:w-96 btn btn-warning' type="submit" />
                                <div className="divider">OR</div>
                                <button className='md:w-96 w-full btn btn-warning btn-outline'>GOOGLE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;