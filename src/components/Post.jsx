import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

function Post(props){
  return(
    <div>
      <h2>{props.title} </h2>
      <h3> by: {props.author} </h3>
      <h4> {props.postBody}</h4>
      <hr/>
    </div>
  );
}

Post.propTypes ={
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  postBody: PropTypes.string.isRequired,
};

export default Post;
