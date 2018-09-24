import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyBfHT_GOj4o5byp9sl99FIO04fQtDOJjDE";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    // YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
    //   // this.setState({ videos });
    //   this.setState({
    //     videos: videos,
    //     selectedVideo: videos[0]
    //   });
    // });

    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      // this.setState({ videos });
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        {/* <SearchBar onSearchTermChange={term => this.videoSearch(term)} /> */}
        <SearchBar onSearchTermChange={videoSearch} />
        {/* <VideoDetail video={this.state.videos[0]} /> */}
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
//   console.log(data);
// });

// Create a new component. This component should produce
// some HTML
// const App = function () {
//   return <div>Hi!</div>;
// }

// const App = () => {
//   return (
//   <div>
//     <SearchBar />
//     <VideoList videos={this.state.videos} />
//   </div>)
// };

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
