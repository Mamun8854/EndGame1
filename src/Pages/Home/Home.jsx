import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Loading from "../../Shared/Loading/Loading";
import HomePostCard from "./HomePostCard";
import PostInput from "./PostInput/PostInput";

const Home = () => {
  const [posts, setPosts] = useState();
  const { loading } = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://endgame1-server.vercel.app/homePost?size=3`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <section>
      <section className="my-5">
        <PostInput></PostInput>
      </section>

      <section>
        <div className="grid lg:grid-cols-2 gap-4">
          {posts?.map((post) => (
            <HomePostCard post={post} key={post._id}></HomePostCard>
          ))}
        </div>
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
