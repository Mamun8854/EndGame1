import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import PostCard from "./PostCard/PostCard";

const Posts = () => {
  const [posts, setposts] = useState();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    fetch("https://endgame1-server.vercel.app/posts")
      .then((res) => res.json())
      .then((data) => {
        setposts(data);
        setLoad(false);
      });
  }, []);

  if (load) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center pb-10">All Posts</h2>

      <div className="flex flex-col gap-4 items-center">
        {posts?.map((post) => (
          <PostCard post={post} key={post?._id}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default Posts;
