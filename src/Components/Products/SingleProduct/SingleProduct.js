import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import OrderProduct from './OrderProduct';
import { useQuery } from 'react-query';
import Review from './Review';


const SingleProduct = () => {
    const { name, image, _id, price, description } = useLoaderData();
    const navigate = useNavigate();


    const {data : product=[]} = useQuery({
        queryKey : ['product'],
        queryFn : async()=>{
            const res = await fetch(`http://localhost:5000/reviews/${_id}`,{
                
            });
            const data =await res.json();
            return data;
        }
    })


    const {user} = useContext(AuthContext)
   
    const handlerSubmit = () =>{
        const data = {
            name: name,
            image: image,
            price: price,
            description: description,
            email : user.email
        }

        fetch("http://localhost:5000/orders", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged === true){
                toast.success(`Thank you for ordering our products`)
                navigate('/myOrder')
            }
        })

    }

    return (
        <div draggable='true' className='mb-20'><h1 className='text-white font-bold text-4xl mt-5'>Here are all the details of our products</h1>
            <div className='flex justify-between'>
                <div className=''>
                    <img src={image} className='w-[500px] h-[500px]' alt="" />
                    <h1 className='text-white font-bold text-2xl text-justify ms-10'>Name : {name} </h1>
                    <p className='text-white font-bold text-justify ms-10 text-xl mt-4'>Price : {price}$ </p>
                    <p className='text-white text-justify ms-10 mt-4'>Description : {description} </p>
                    <div className=' text-justify ms-10 mt-4'>
                        <button onClick={handlerSubmit} className='w-96  btn btn-warning'>Add to cart</button>
                    </div>

                    {/* form */}

                    <OrderProduct />

                </div>
                <div className='w-1/2 mt-16'>
                    <h1 className='font-bold text-white text-4xl'>These are our reviews of this dish</h1>
                    <div className='mt-8 gap-5'>
                        {
                            product.map(items => <Review key={items._id} items={items}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;