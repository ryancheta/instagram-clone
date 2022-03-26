import React from "react";

const Comment = ({ id, username, comment, className }) => {
  const detectMentions = str => {};

  return (
    <div className={className}>
      <h4 style={{ display: "inline" }}>{username}</h4>&nbsp;
      <span>{comment}</span>
    </div>
  );
};

export default Comment;
