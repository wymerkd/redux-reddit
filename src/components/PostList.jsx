import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Col, Row } from 'react-bootstrap';


function PostList(props){
    return(
      <div>
      <hr/>
      {Object.keys(props.postList).map(function(postId){
        let post = props.postList[postId];
        return <Post author={post.author}
        title={post.title}
        postBody={post.postBody}
        key={post.id}/>
      })}
  </div>
    );
}
PostList.propTypes ={
  postList: PropTypes.object
};

export default PostList;
