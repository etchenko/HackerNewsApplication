import { STORY_ARCHIVE } from '../constants/actionTypes';

export const doArchiveStory = (id: string) => {
   return {type: STORY_ARCHIVE, id}
};
