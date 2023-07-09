import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import form from '../../image/register.gif'
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/UseToken';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [createUserEmail, setCreateUserEmail] = useState('')
    const [token] = useToken(createUserEmail);

    if(token){
        navigate('/')
    }

    const handlelRegister = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                saveUser(data.name, data.email)
                toast.success('successfull you login !!!!')
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message)
            })
    };

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch("https://food-products-server.vercel.app/users", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged === true){
                // getUserToken(email);
                setCreateUserEmail(email)
            }
        })
    };

    
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img draggable='true' src={form} className=" w-full mt-8 md:w-full mx-auto md:-w-1/2 rounded-lg shadow-2xl" alt='' />
                <div>
                    <div className="hero w-full">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <form onSubmit={handleSubmit(handlelRegister)}>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="texl" {...register("name")} className="input input-bordered input-primary w-full md:w-96" required />
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email")} className="input input-bordered input-primary w-full md:w-96" required />
                                </div>


                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password")} className="input input-bordered input-primary w-full md:w-96" required />
                                </div>
                                <p className='mt-4 text-dark text-justify'>Are you already registered? <Link to={'/login'} className='font-bold'>Login</Link></p>
                                <input className='mt-4 w-full md:w-96 btn btn-warning' type="submit" />
                                <div className="divider">OR</div>
                                <button className=' w-full md:w-96 btn btn-warning btn-outline'>GOOGLE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;