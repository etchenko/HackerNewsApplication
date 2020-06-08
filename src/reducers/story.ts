import { STORIES_ADD, STORIES_FETCH_ERROR } from '../constants/actionTypes';

export interface STATE_TYPE {
  stories: any[];
  error: unknown;
}

const INITIAL_STATE = {
  stories: [],
  error: null,
};

const applyAddStories = (state: STATE_TYPE, action: any) => ({
  stories: action.stories,
  error: null,
});

const applyFetchErrorStories = (state: STATE_TYPE, action: any) => ({
  stories: [],
  error: action.error,
});

function storyReducer(state = INITIAL_STATE, action: any) {
  switch(action.type) {
    case STORIES_ADD : {
      return applyAddStories(state, action);
    }
    case STORIES_FETCH_ERROR : {
      return applyFetchErrorStories(state, action);
    }
    default : return state;
  }
}

export default storyReducer;
