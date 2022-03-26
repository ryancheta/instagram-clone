import React, { useState, forwardRef, memo, useRef, useCallback } from "react";
import "./styles.scss";
import icons from "./icons.js";
import Slider from "react-slick";
import Comment from "./Comment";
import heart_icon from "../../assets/images/svg/heart-icon.svg";
import message_icon from "../../assets/images/svg/message-icon.svg";
import CtaSection from "./CtaSection";

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  infinite: true,
  draggable: true,
  variableWidth: false
};

const Post = ({
  id,
  username,
  avatar,
  location,
  likes,
  images,
  comments,
  time_ago
}) => {
  const Container = ({ children }) => (
    <div
      className='post-container'
      style={{
        marginBottom: "1rem",
        border: "0.5px solid #eee",
        backgroundColor: "white"
      }}
    >
      {children}
    </div>
  );

  const [newComment, setNewComment] = useState("");
  const postValueRef = useRef();
  const addNewComment = useCallback((e, value) => {
    e.preventDefault();
    setNewComment(value);
  });

  if (postValueRef.current?.value) {
    console.log(postValueRef?.current?.value);
  }
  return (
    <Container>
      <div className='header'>
        <img src={avatar} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "0.5em",
            padding: "0"
          }}
        >
          <h4 className='username'>{username}</h4>
          <p className='location'>{location}</p>
        </div>
        <img
          style={{ marginLeft: "auto" }}
          src={icons.more.url}
          height={icons.more.size}
        />
      </div>
      <img id='main-image' src={images[0]} alt='' />
      <CtaSection />
      <div className='comments-section'>
        <p className='likes'>{likes.toLocaleString()} likes</p>
        {comments && comments.length > 0
          ? comments.map((comment) => (
              <Comment
                key={`${comment.comment}-#${comment.comment}_`}
                className='comments'
                username={comment.username}
                comment={comment.comment}
              />
            ))
          : null}
        <p className='time-ago'>{time_ago}</p>
      </div>
      <Input
        username={username}
        addNewComment={addNewComment}
        ref={postValueRef}
      />
    </Container>
  );
};

const Input = forwardRef(({ username, addNewComment }, ref) => {
  return (
    <form
      onSubmit={(e) => addNewComment(e, ref.current.value)}
      style={{ display: "flex", position: "relative" }}
    >
      <input
        ref={ref}
        type='text'
        key={username}
        className='input'
        placeholder='Add a comment...'
      />
      {/* <button type='submit' className='post--button'>
        Post
      </button> */}
    </form>
  );
});

export default memo(Post);
