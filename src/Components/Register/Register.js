import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import form from '../../image/form.png'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

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
        fetch("http://localhost:5000/users", {
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
                getUserToken(email);
            }
        })
    };

    const getUserToken = email =>{
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res => res.json())
        .then(data =>{
            if(data.accessToken){
                localStorage.setItem('accessToken', data.accessToken)
                navigate('/')
            }
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img draggable='true' src={form} className="-w-1/2 rounded-lg shadow-2xl" alt='' />
                <div>
                    <div className="hero ">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <form onSubmit={handleSubmit(handlelRegister)}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="texl" {...register("name")} className="input input-bordered input-primary w-96" required />
                                </div>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email")} className="input input-bordered input-primary w-96" required />
                                </div>


                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password")} className="input input-bordered input-primary w-96" required />
                                </div>
                                <p className='mt-4 text-white text-justify'>Are you already registered? <Link to={'/login'} className='font-bold'>Register</Link></p>
                                <input className='mt-4 w-96 btn btn-warning' type="submit" />
                                <div className="divider">OR</div>
                                <button className='w-96 btn btn-warning btn-outline'>GOOGLE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;