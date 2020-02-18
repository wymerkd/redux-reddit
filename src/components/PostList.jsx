import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Col, Row } from 'react-bootstrap';

function PostList(props){
  return(
    <div>
      <Row>
        <Col md="1" sm="1">
          <button>⬆️  </button>
        </Col>
        <Col md="11" sm="11">
          {props.postList.map((post) =>
          <Post author={post.author}
            title={post.title}
            postBody={post.postBody}
            key={post.id}/>
          )}
        </Col>
      </Row>
    </div>
  );
}
PostList.propTypes ={
  postList: PropTypes.array
};

export default PostList;
