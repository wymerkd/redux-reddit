import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function NewPostForm(props){
  let _author = null;
  let _title = null;
  let _postBody = null;

  function handleTroubleshootingConfirmation(event){
    event.preventDefault();
    props.onNewPostCreation({author: _author.value, title: _title.value, postBody: _postBody.value, id: v4()});
    _author.value = '';
    _title.value = '';
    _postBody.value = '';
  }
  return (
    <div>
      <form onSubmit={handleTroubleshootingConfirmation}>
        <input
          type='text'
          id='author'
          placeholder='Post Author'
          ref={(input) => {_author = input;}} />
        <input
          type='text'
          id='title'
          placeholder='title'
          ref={(input) => {_title = input;}} />
        <textarea
          id='postBody'
          placeholder='Create your post'
          ref={(textarea) => {_postBody = textarea;}} />
          <button type='submit'>Post!</button>
      </form>
    </div>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;
