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
                if(!userRes.ok || !postRes.ok) throw new Error("Failed to fetch data!");

                const usersData = await userRes.json();
                const postsData = await postRes.json();
                console.log(userRes);
                console.log(postsData)

                const selectedUser = usersData.find(u => u.id === userId);
                const userPosts = postsData.filter(p => p.userId === userId);

                setUser(selectedUser);
                setPosts(userPosts);

            }
            catch(err){
                setError(err.message || "Something went wrong!");
            }
            finally{
                setLoading(false);
            }
            
        }
        fetchData();
    }, [userId]);
    return {user, posts, loading, error};
};
export default useGetUserById;