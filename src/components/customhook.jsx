import { useEffect, useState } from "react"

const useGetUserById = (userId) =>{
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(()=> {
        let fetching = async () => {

        }
    })
}
export default useGetUserById;