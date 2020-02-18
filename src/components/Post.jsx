import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return(
    <div>
      <h3>{props.author} - {props.title}</h3>
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
