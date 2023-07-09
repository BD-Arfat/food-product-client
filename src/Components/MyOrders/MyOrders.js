import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const MyOrders = () => {

    const { user } = useContext(AuthContext)

    const url = `https://food-products-server.vercel.app/order?email=${user?.email}`

    const { data: orders = [], refetch } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(url,{
                
            });
            const data = await res.json();
            return data;
        }
    });

    const hendelDelete = id =>{
        const proceeed = window.confirm(`Do you really want to delete this product?`);
        if(proceeed){
            fetch(`https://food-products-server.vercel.app/order/${id}`, {
                method : 'DELETE'
            })
            .then(res=>res.json())
            .then(data=> {
                if(data.deletedCount > 0){
                    refetch()
                    toast.success('The Order you want to delete has been successfully deleted')
                }
            })
           
        }
    }
    return (
        <div>
            <h1 className='md:text-4xl text-2xl font-bold text-white mt-16'>Everything you ordered is here</h1>
            <h1 className='text-white mt-8 font-bold mg:text-3xl'>You have added {orders.length} products</h1>
            <div className='mt-12'>
                <div className="lg:mx-20">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                {/* <th></th> */}
                                <th className='md:font-bold text-[5px] text-white md:text-lg'>Image</th>
                                <th className='md:font-bold text-[5px] text-white md:text-lg'>Name</th>
                                <th className='md:font-bold text-[5px] text-white md:text-lg'>Email</th>
                                <th className='md:font-bold text-[5px] text-white md:text-lg'>Price</th>
                                <th className='md:font-bold text-[5px] text-white md:text-lg'>Delete</th>
                                <th className='md:font-bold text-[5px] text-white md:text-lg'>Payments</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                orders.map((items, i) => <tr key={items._id}>
                                    {/* <th className='text-[7px] md:text-[15px] text-white'>{i + 1}</th> */}
                                    <th className=''><div className="avatar">
                                        <div className="md:w-12 rounded-full">
                                            <img src={items.image} alt='' />
                                        </div>
                                    </div></th>
                                    <td className='text-[5px] font-bold md:text-[15px] text-white'>{items.name}</td>
                                    <td className='text-[5px] font-bold md:text-[15px] text-white'>{items.email}</td>
                                    <td className='text-[5px] font-bold md:text-[15px] text-white'>{items.price}$</td>
                                    <td className=''><button onClick={()=>hendelDelete(items._id)} className='btn text-[5px] text-white btn-sm btn-error md:text-[15px]'>Delete</button></td>
                                    <td><Link to={`/payment/${items._id}`}  className='btn text-[5px] text-white btn-sm py-[5px] btn-success md:text-[15px]'>Payment</Link></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;