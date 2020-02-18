import React from 'react';
import PropTypes from 'prop-types';

function NewPostForm(){
  let _author = null;
  let _title = null;
  let _postBody = null;

  function handleTroubleshootingConfirmation(event){
    event.preventdefault();
    console.log(_author.value);
    console.log(_title.value);
    console.log(_postBody.value);
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
    <button type='submit'>Help!</button>
    </form>
    </div>
  );
}

export default NewPostForm;
