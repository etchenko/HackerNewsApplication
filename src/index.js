import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './store';
/*
  import { getReadableStories } from './selectors/story';
  import { doArchiveStory } from './actions/archive';
*/
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const stories= [
  {
    title: 'Story',
    url:'https://google.com',
    author: 'John Doe',
    num_comments: 0,
    points: 4,
    objectID: 0,
  }
];

ReactDOM.render(
  <Provider store={store}>
    <App
    /*
      stories={getReadableStories(store.getState())}
      onArchive={id => store.dispatch(doArchiveStory(id))}
    */
    />
  </Provider>,
  document.getElementById('root')
);

//store.subscribe(render);
//render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
