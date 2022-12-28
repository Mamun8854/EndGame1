import React, { useEffect, useState } from "react";
import PostCard from "./PostCard/PostCard";

const Posts = () => {
  const [posts, setposts] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => {
        setposts(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center py-4">All Posts</h2>

      <div className="flex flex-col gap-4 items-center">
        {posts?.map((post) => (
          <PostCard post={post} key={post?._id}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default Posts;
