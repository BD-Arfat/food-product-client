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
            const res = await fetch(`https://food-products-server.vercel.app/product?email=${user?.email}`,{
                headers : {
                    authoriZation : `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    const handelDelete = (id) =>{
        const proceeed = window.confirm(`Do you really want to delete this product?`);
        if(proceeed){
            fetch(`https://food-products-server.vercel.app/product/${id}`, {
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
            <h1 className='text-white font-bold md:text-4xl text-2xl lg:ms-5 mt-4 text-justify'>Below are the products you have added</h1>
            <div>
                <div className="overflow-x-auto mt-9 mb-9">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                {/* <th className='font-bold text-white'></th> */}
                                <th className='font-bold text-error text-[8px] md:text-xl lg:text-xl'>Products Image</th>
                                <th className='font-bold text-error text-[8px] md:text-xl lg:text-xl'>Products Name</th>
                                <th className='font-bold text-error text-[8px] md:text-xl lg:text-xl'>Your Email</th>
                                <th className='font-bold text-error text-[8px] md:text-xl lg:text-xl'>Product Price</th>
                                {/* <th className='font-bold text-error text-[8px] md:text-xl lg:text-xl'>Buy Product</th> */}
                                <th className='font-bold text-error text-[8px] md:text-xl lg:text-xl'>Delete Product</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            { addProduct.length > 0 &&
                                addProduct.map((items, i) => <tr key={items._id}>
                                    {/* <th className=' text-white'>{i + 1}</th> */}
                                    <td>
                                        <div className="avatar">
                                            <div className="w-8 md:w-11 lg:w-14 rounded">
                                                <img src={items.image} alt="Tailwind-CSS-Avatar-component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className=' md:text-[15px] lg:font-bold text-[7px] text-white'>{items.name}</td>
                                    <td className=' md:text-[15px] lg:font-bold text-[7px] text-white'>{items.email}</td>
                                    <td className=' md:text-[15px] lg:font-bold text-[7px] text-white'>{items.price}$</td>
                                    {/* <td><Link to={`/products/${items._id}`} className='btn btn-sm btn-success text-[8px] md:text-[12px] px-[5px] md:px-[10px] py-[5px]'>Buy Now</Link></td> */}
                                    <td><button onClick={()=>handelDelete(items._id)} className='btn btn-sm btn-error text-[8px] md:text-[12px] px-[5px] md:px-[10px] py-[5px]'>Delete</button></td>
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