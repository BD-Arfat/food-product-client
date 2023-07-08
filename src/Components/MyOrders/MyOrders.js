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
            <h1 className='text-4xl font-bold text-white mt-16'>Everything you ordered is here</h1>
            <div className='mt-12'>
                <div className="mx-20">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Delete</th>
                                <th>Payments</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                orders.map((items, i) => <tr key={items._id}>
                                    <th>{i + 1}</th>
                                    <th><div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={items.image} alt='' />
                                        </div>
                                    </div></th>
                                    <td className='text-white font-bold'>{items.name}</td>
                                    <td>{items.email}</td>
                                    <td className='text-white font-bold'>{items.price}$</td>
                                    <td><button onClick={()=>hendelDelete(items._id)} className='btn btn-sm btn-error'>Delete</button></td>
                                    <td><Link to={`/payment/${items._id}`}  className='btn btn-sm btn-success'>Payment</Link></td>
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