import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { useQuery } from 'react-query';
import { toast } from 'react-hot-toast';

const MyReview = () => {

    const {user} = useContext(AuthContext);

    const url = `https://food-products-server.vercel.app/review?email=${user?.email}`

    const {data : product=[], refetch} = useQuery({
        queryKey : ['product', user?.email],
        queryFn : async()=>{
            const res = await fetch(url);
            const data =await res.json();
            return data;
        }
    });

    const handelDelete = (id) =>{
        const proceeed = window.confirm(`Do you really want to delete this product?`);
        if(proceeed){
            fetch(`https://food-products-server.vercel.app/review/${id}`, {
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
            <h1 className='font-bold text-3xl mt-4 text-white  '>Your reviews are below</h1>
            <div className='mt-8'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th className='font-bold text-white text-lg'>Name</th>
                                <th className='font-bold text-white text-lg'>Email</th>
                                <th className='font-bold text-white text-lg'>Review</th>
                                <th className='font-bold text-white text-lg'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                product.map((items, i)=><tr key={items._id}>
                                <th>{i+1}</th>
                                <td>{items.name}</td>
                                <td>{items.email}</td>
                                <td>{items.review}</td>
                                <td><button onClick={()=>handelDelete(items._id)} className='btn btn-sm btn-error'>Delete</button></td>
                            </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyReview;