import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const AllUsers = () => {

    const url = `https://food-products-server.vercel.app/users`

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });

    const handelDelete = (id) =>{
        const proceeed = window.confirm(`Do you really want to delete this product?`);
        if(proceeed){
            fetch(`https://food-products-server.vercel.app/users/${id}`, {
                method : 'DELETE'
            })
            .then(res=>res.json())
            .then(data=> {
                if(data.deletedCount > 0){
                    refetch()
                    toast.success('The user you want to delete has been successfully deleted')
                }
            })
           
        }
    };

    const handelAdmin = (id) =>{
        fetch(`https://food-products-server.vercel.app/users/admin/${id}`,{
            method : 'PUT',
            headers : {
                authoriZation : `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                refetch()
                toast.success('Hey you just made another seller')
            }
        })
    }

    return (
        <div>
            <div>
                <h1 className='text-white font-bold text-justify ms-5 text-4xl mt-4'>All users are here</h1>
            </div>
            <div className="overflow-x-auto mt-7">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            {/* <th className='font-bold text-error lg:text-xl'></th> */}
                            <th className='font-bold text-error text-[8px] md:text-xl lg:text-xl'>Users Name</th>
                            <th className='font-bold text-error text-[8px] md:text-xl lg:text-xl'>Users Email</th>
                            <th className='font-bold text-error text-[8px] md:text-xl lg:text-xl'>Create a seller</th>
                            <th className='font-bold text-error text-[8px] md:text-xl lg:text-xl'>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((items, i) => <tr key={items._id}>
                                {/* <th draggable='true' className='lg:font-bold text-[7px] text-white'>{i+1}</th> */}
                                <td draggable='true' className=' md:text-[15px] lg:font-bold text-[7px] text-white'>{items.name}</td>
                                <td draggable='true' className=' md:text-[15px] lg:font-bold text-[7px] text-white'>{items.email}</td>
                                <td>{ items?.role !== 'admin' && <button onClick={()=>handelAdmin(items._id)} className='btn btn-sm btn-success text-[8px] md:text-[12px] px-[5px] md:px-[10px] py-[5px]'>Add Seller</button>}</td>
                                <td><button onClick={()=>handelDelete(items._id)} className='btn btn-sm btn-error text-[8px] md:text-[12px] px-[5px] md:px-[10px] py-[5px]'>Delete USer</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;