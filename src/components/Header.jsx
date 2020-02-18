import React from "react";
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/newpost">Create Post</Link>
      <h1> Reddit clone </h1>
      <hr/>
    </div>
  );
}

export default Header;
