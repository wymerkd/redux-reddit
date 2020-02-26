import postListReducer from './../src/reducers/post-list-reducer';


describe('postListReducer', () => {

  test('Temporary dummy test: two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  let action;
  const samplePostData = {
    author : 'Ryan & Aimen',
    title : '4b',
    postBody : 'Jest is being a diva and won\'t work with Webpack!',
    id: 0
  };

  test('Should return default state if no action type is recognized', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

});
