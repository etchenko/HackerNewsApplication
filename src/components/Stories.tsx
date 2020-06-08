import React from 'react';
import './Stories.css';
import { connect } from 'react-redux';
import { doArchiveStory } from '../actions/archive';
import { getReadableStories, getFetchError } from '../selectors/story';

import Story from './Story';

const COLUMNS = {
  title: {
    label: "Title",
    width: '40%',
  },
  author: {
    label: 'Author',
    width: '20%',
  },
  comments: {
    label: 'Comments',
    width: '20%',
  },
  points : {
    label: 'Points',
    width: '10%',
  },
  archive: {
    width: '10%',
  },
};

type StoriesProps = {
  stories: any;
  error: any;
}

const Stories: React.FC<StoriesProps> = ({ stories, error }) =>
<div className="stories">
  <StoriesHeader columns={COLUMNS}/>

    { error && <p className="error">Something went wrong ...</p> }

    {(stories || []).map((story: any) =>
      <Story
        key={story.objectID}
        story={story}
        columns={COLUMNS}
      />
    )}
  </div>

type StoriesHeaderProps = {
  columns: any;
}

const StoriesHeader: React.FC<StoriesHeaderProps> = ({ columns }) =>
  <div className='stories-header'>
    {
      //TODO: FIX Header Mapping
    }
  </div>

 /*
 {Object.keys(COLUMNS).map(key =>
   <span
     key={key}
     style={{width: COLUMNS[key].width }}
   >
     {COLUMNS[key].label}
   </span>
 )}
 */
  const mapStateToProps = (state: any) => ({
    stories: getReadableStories(state),
    error: getFetchError(state),
  });

export default connect(
  mapStateToProps,
)(Stories);
