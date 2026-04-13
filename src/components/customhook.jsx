import { useEffect, useState } from "react"

const useGetUserById = (userId) =>{
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(()=> {
        let fetchData = async () => {
            if(!userId) return;

            try{
                setLoading(true);
                setError(null);

                const [userRes, postRes] = await Promise.all([
                            fetch('https://jsonplaceholder.typicode.com/users'),
                            fetch('https://jsonplaceholder.typicode.com/posts')
                        ]);
                if(!userRes.ok || !postRes.ok) throw new Error("")
            }
            catch(err){
                setError(err);
            }
            
        }
    });
    return {user, posts, loading, error};
};
export default useGetUserById;