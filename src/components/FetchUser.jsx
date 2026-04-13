import { useState } from "react";
import useGetUserById from "./customhook";

const UserProfileDemo = () => {
  const [selectedUserId, setSelectedUserId] = useState(1);
  const { user, posts, loading, error } = useGetUserById(selectedUserId);

  const handleUserChange = (event) => {
    setSelectedUserId(Number(event.target.value));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
        User Profile & Posts
      </h1>

      <div className="flex justify-center items-center gap-4 mb-8">
        <label htmlFor="userId" className="text-lg font-medium text-gray-700">
          Select User ID:
        </label>
        <select
          id="userId"
          value={selectedUserId}
          onChange={handleUserChange}
          className="px-4 py-2 text-base border-2 border-gray-300 rounded-lg bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
            <option key={id} value={id}>
              User {id}
            </option>
          ))}
        </select>
      </div>

      {loading && (
        <div className="text-center text-lg text-gray-600 py-10">
          Loading user data...
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-center mb-6">
          Error: {error}
        </div>
      )}

      {!loading && !error && user && (
        <>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <div className="text-2xl font-bold text-gray-800 mb-4">
              {user.name}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Username:</span> {user.username}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Email:</span> {user.email}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Phone:</span> {user.phone}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Website:</span> {user.website}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">City:</span>{" "}
                {user.address?.city}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Company:</span>{" "}
                {user.company?.name}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">
              Posts ({posts.length})
            </h2>

            {posts.length === 0 ? (
              <p className="text-center text-gray-600">
                No posts found for this user.
              </p>
            ) : (
              <div className="grid gap-4">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-base font-bold text-gray-800 mb-2 capitalize">
                      {post.title}
                    </div>
                    <div className="text-sm text-gray-600 leading-relaxed mb-3">
                      {post.body}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfileDemo;