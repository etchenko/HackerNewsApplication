import  * as React from 'react';
import { connect } from 'react-redux';
import { doFetchStories } from '../actions/story';
import  Button  from './Button';

interface SearchStoriesProps {
  onFetchStories: any;
}

interface SearchStoriesState {
  query: any;
}

class SearchStories extends React.Component<SearchStoriesProps, SearchStoriesState> {
  constructor(props: any) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      query: '',
    };
  }

  onSubmit(event: any) {
    const  {query}  = this.state;
    if (query) {
      this.props.onFetchStories(query);
      this.setState({query: '' });
    }

    event.preventDefault();
  }

  onChange(event: any) {
    const {value} = event.target;
    this.setState({ query: value});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.query}
          onChange={this.onChange}
        />
        <Button type="submit">
          Search
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  onFetchStories: (query: any) => dispatch(doFetchStories(query)),
});

export default connect(
  null,
  mapDispatchToProps
)(SearchStories);
