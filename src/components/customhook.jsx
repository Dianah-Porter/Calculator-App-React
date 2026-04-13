import { useEffect, useState } from "react"

const useGetUserById = (userId) =>{
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    
    useEffect(async ()=>{
        try{
            let user = await fetch('https://jsonplaceholder.typicode.com/users');
            let posts = await fetch('https://jsonplaceholder.typicode.com/posts');
            let userjson = await user.json();
            let userdata = userjson.data;
            let postsjson = await posts.json();
            let postsdata = postsjson.data;

            setUser(userdata);
            setPosts(postsdata);
        }
        catch{
            setError(error);
        }
        finally{

        }
    },[user, posts])

    return {user, posts, loading, error}
    
}
export default useGetUserById;