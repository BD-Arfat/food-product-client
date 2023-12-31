import { useEffect, useState } from "react"

// userAdmin hooks
const useAdmin = (email) =>{
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoding, setIsAdminLoding] = useState(true)
    useEffect( ()=>{
        if(email){
            fetch(`https://food-products-server.vercel.app/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.isAdmin)
                setIsAdminLoding(false)
            })
        }
    } ,[email])
    return [isAdmin, isAdminLoding]
};

export default useAdmin;
