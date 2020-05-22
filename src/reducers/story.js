const INITIAL_STATE = [
  {
    title: 'React',
    url: 'https://www.bullshiturl.com',
    author: 'Elijah T',
    num_comments: 3,
    points: 4,
    objectID: 0,
  }, {
    title: 'Redux',
    url: 'https://bullshiturl.com',
    author: 'John Doe',
    num_comments: 2,
    points: 4,
    objectID: 1,
  },
];

function storyReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    default : return state;
  }
}

export default storyReducer;
