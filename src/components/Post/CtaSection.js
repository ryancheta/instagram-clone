import React from 'react'
import './styles.scss';
import icons from './icons.js';
import heart_icon from '../../assets/images/svg/heart-icon.svg';
import message_icon from '../../assets/images/svg/message-icon.svg';

const CtaSection = () => {
  return (
    <div className="ctaSection">
        <img src={heart_icon} height={icons.heart.size}/>
        <img src={icons.comment.url} width={icons.comment.size} height={icons.comment.size}/>
        <img src={message_icon} width={icons.message.size} height={icons.message.size} />
        <img src={icons.bookmark.url} width={icons.bookmark.size} height={icons.bookmark.size}/>
    </div>
  )
}

export default CtaSection;