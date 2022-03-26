import React from "react";
import instagram_wordmark from "../../assets/images/svg/instagram-wordmark.svg";
import message_icon from "../../assets/images/svg/message-icon.svg";
import camera_icon from "../../assets/images/svg/camera-icon.svg";
import "./styles.scss";

const NavBar = ({ children }) => {
  return (
    <div className="nav-container">
      <div className="nav-content-container">
        <img src={camera_icon} className="camera-icon" height="22" />
        <img className="wordmark" src={instagram_wordmark} />
        <img src={message_icon} className="message-icon" height="22" />
      </div>
      {children}
    </div>
  );
};

export default NavBar;
