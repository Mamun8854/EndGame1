import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomePostCard from "./HomePostCard";
import PostInput from "./PostInput/PostInput";

const Home = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/homePost?size=3`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <section>
      <section className="my-5">
        <PostInput></PostInput>
      </section>

      <section className="grid lg:grid-cols-2 gap-4">
        {posts?.map((post) => (
          <HomePostCard post={post} key={post._id}></HomePostCard>
        ))}
      </section>
      <div className="flex justify-center items-center py-10">
        <Link to="/media" className="btn btn-sm">
          See All Posts
        </Link>
      </div>
    </section>
  );
};

export default Home;
