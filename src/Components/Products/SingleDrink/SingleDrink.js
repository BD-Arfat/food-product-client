import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import OrderDrink from './OrderDrink';
import { useQuery } from 'react-query';
import Review from '../SingleProduct/Review';

const SingleDrink = () => {
    const {name, image, price, _id} = useLoaderData();
    const {user} = useContext(AuthContext);

    const {data : product=[], refetch} = useQuery({
        queryKey : ['product'],
        queryFn : async()=>{
            const res = await fetch(`https://food-products-server.vercel.app/reviews/${_id}`,{
                
            });
            const data =await res.json();
            return data;
        }
    })

    const navigate = useNavigate()
   
    const handlerSubmit = () =>{
        const data = {
            service : _id,
            name: name,
            image: image,
            price: price,
            email : user.email
        }

        fetch("https://food-products-server.vercel.app/orders", {
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
                refetch()
                navigate('/myOrder')
            }
        })

    }

    return (
        <div draggable='true' className='mb-20'><h1 className='text-dark font-bold text-2xl lg:text-4xl mt-5'>Here are all the details of our products</h1>
            <div className='lg:flex lg:justify-between'>
                <div>
                    <img src={image} className='lg:w-[500px] w-[200px] h-[200px] lg:h-[500px] mt-8' alt="" />
                    <h1 className='text-dark font-bold text-2xl text-justify ms-10'>Name : {name} </h1>
                    <p className='text-dark font-bold text-justify ms-10 text-xl mt-4'>Price : {price}$ </p>
                    <div className=' text-justify ms-10 mt-4'>
                        <button onClick={handlerSubmit} className='lg:w-96 w-full btn btn-warning'>Add to cart</button>
                    </div>

                    {/* form */}
                    <OrderDrink/>

                </div>
                <div className='lg:w-1/2 mt-16'>
                   <h1 className='font-bold text-dark text-4xl'>These are our reviews of this dish</h1>
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

export default SingleDrink;