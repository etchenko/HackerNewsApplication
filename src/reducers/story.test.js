import deepFreeze from 'deep-freeze';
import storyReducer from './story';

describe('story reducer', () => {
  it('adds stories to the story state', () => {
    const stories = ['a','b','c'];

    const action = {
      type: 'STORIES_ADD',
      stories,
    };

    const previousState = { stories: [], error: null };
    const expectedNewState = { stories, error: null };

    deepFreeze(previousState);
    const newState = storyReducer(previousState, action);

    expect(newState).toEqual(expectedNewState);
  });
});

describe('error fetching', () => {
  it('adds an error to the story state', () => {
    const error = 'Error';

    const action = {
      type: 'STORIES_FETCH_ERROR',
      error,
    };

    const previousState = { stories: [], error: null };
    const expectedNewState = { stories: [], error };

    deepFreeze(previousState);
    const newState = storyReducer(previousState, action);

    expect(newState).toEqual(expectedNewState);
  });
});
