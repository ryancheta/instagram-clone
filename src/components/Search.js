import React from "react";
import { useHistory } from "react-router-dom";
import back_arrow from "../assets/images/svg/back-arrow.svg";

const Search = () => {
  const history = useHistory();
  return (
    <div style={{display: 'flex', cursor: 'pointer', padding: '3rem'}}>
      <img 
        style={{
          paddingRight: '1rem'
        }}
        src={back_arrow} 
        height="32"
        onClick={() => history.goBack()}
      />
      <h1>SEARCH PAGE!</h1>
    </div>
  );
};

export default Search;
