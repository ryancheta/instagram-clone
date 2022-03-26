import React from "react";
import Post from "./Post/Post";
import posts from "../../posts.js";

const MainFeed = ({ children, className }) => {
  const Posts = () =>
    posts.map(post => (
      <Post
        key={`${post.username}-${post.likes}-${post.time_ago}`}
        username={post.username}
        avatar={post.avatar}
        images={post.images}
        location={post.location}
        likes={post.likes}
        comments={post.comments}
        time_ago={post.time_ago}
      />
    ));
  return (
    <div
      style={{
        maxWidth: "640px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column"
      }}
      className={className}
    >
      <Posts />
      {children}
    </div>
  );
};

export default MainFeed;
