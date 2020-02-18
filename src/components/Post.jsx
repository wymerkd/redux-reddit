import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import LikeControl from './LikeControl'

function Post(props){
  return(
    <div>
      <Row>
        <Col md="1" sm="1">
          <LikeControl />
        </Col>
        <Col md="11" sm="11">
          <h2>{props.title} </h2>
          <h3> by: {props.author} </h3>
          <h4> {props.postBody}</h4>
          <hr/>
        </Col>
      </Row>
    </div>
  );
}

Post.propTypes ={
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  postBody: PropTypes.string.isRequired,
};

export default Post;
