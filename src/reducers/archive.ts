import { STORY_ARCHIVE }  from '../constants/actionTypes';
//import { STATE_TYPE } from './story'

const INITIAL_STATE: any[] = [];

const applyArchiveStory = (state = INITIAL_STATE, action: any) =>
  [ ...state, action.id];

function archiveReducer(state = INITIAL_STATE, action: any) {
  switch(action.type) {
    case STORY_ARCHIVE : {
      return applyArchiveStory(state, action,);
    }
    default : return state;
  }
}

export default archiveReducer;
