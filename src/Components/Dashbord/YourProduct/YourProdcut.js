import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const YourProdcut = () => {

    const {user} = useContext(AuthContext)

    const { data: addProduct = [], refetch } = useQuery({
        queryKey: ['addProduct', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/product?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    const handelDelete = (id) =>{
        const proceeed = window.confirm(`Do you really want to delete this product?`);
        if(proceeed){
            fetch(`http://localhost:5000/product/${id}`, {
                method : 'DELETE'
            })
            .then(res=>res.json())
            .then(data=> {
                if(data.deletedCount > 0){
                    refetch()
                    toast.success('The Product you want to delete has been successfully deleted')
                }
            })
           
        }
    }

    return (
        <div>
            <h1 className='text-white font-bold text-4xl ms-5 mt-4 text-justify'>Below are the products you have added</h1>
            <div>
                <div className="overflow-x-auto mt-9 mb-9">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='font-bold text-white'></th>
                                <th className='font-bold text-white'>Products Image</th>
                                <th className='font-bold text-white'>Products Name</th>
                                <th className='font-bold text-white'>Your Email</th>
                                <th className='font-bold text-white'>Product Price</th>
                                <th className='font-bold text-white'>Delete Product</th>
                                <th className='font-bold text-white'>Buy Product</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                addProduct.map((items, i) => <tr key={items._id}>
                                    <th className=' text-white'>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-14 rounded">
                                                <img src={items.image} alt="Tailwind-CSS-Avatar-component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-white'>{items.name}</td>
                                    <td className='text-white'>{items.email}</td>
                                    <td className='text-white'>{items.price}$</td>
                                    <td><Link to={`/products/${items._id}`} className='btn btn-sm btn-success'>Buy Now</Link></td>
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

export default YourProdcut;