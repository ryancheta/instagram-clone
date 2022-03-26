import React from 'react';
import './styles.scss';
import heart_icon from '../../assets/images/svg/heart-icon.svg';
import home_icon from '../../assets/images/svg/home-icon.svg';
import add_icon from '../../assets/images/svg/add-icon.svg';
import profile_icon from '../../assets/images/svg/profile-icon.svg';
import search_icon from '../../assets/images/svg/search-icon.svg';
import { Link } from 'react-router-dom';
const SIZE = 20

const TabBar = () => {
  
  return (
    <div className="container"> 
      <Link to="/">
        <img src={home_icon} height={SIZE} /> 
      </Link>
      <Link to="/">
        <img src={search_icon} height={SIZE} /> 
      </Link>
      <img src={add_icon} height={SIZE} /> 
      <img src={heart_icon} height={SIZE}/>
      <Link to={`/`}>
        <img src={profile_icon} height={SIZE} /> 
      </Link>
    </div>
  )
}

export default TabBar;