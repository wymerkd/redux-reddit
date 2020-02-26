export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_POST':
    const { author, title, postBody, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        author: author,
        title: title,
        postBody: postBody,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};
