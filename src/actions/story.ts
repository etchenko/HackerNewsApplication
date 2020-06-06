import { STORIES_ADD, STORIES_FETCH, STORIES_FETCH_ERROR } from '../constants/actionTypes';

const doAddStories = (stories: HTMLElement) => {
  return {type: STORIES_ADD, stories}
};

const doFetchStories = (query: string) => {
  return {type: STORIES_FETCH, query}
};

const doFetchErrorStories = (error: unknown) => {
  return {type: STORIES_FETCH_ERROR, error}
}

export { doAddStories, doFetchStories, doFetchErrorStories };
