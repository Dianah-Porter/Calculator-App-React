import { useState, useEffect } from "react";

const useGetUserById = (userId) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch user and posts in parallel
        const [userRes, postsRes] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/users"),
          fetch("https://jsonplaceholder.typicode.com/posts"),
        ]);

        if (!userRes.ok || !postsRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const usersData = await userRes.json();
        const postsData = await postsRes.json();

        // Find selected user
        const selectedUser = usersData.find(
          (u) => u.id === userId
        );

        // Filter posts for that user
        const userPosts = postsData.filter(
          (post) => post.userId === userId
        );

        setUser(selectedUser);
        setPosts(userPosts);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return { user, posts, loading, error };
};

export default useGetUserById;