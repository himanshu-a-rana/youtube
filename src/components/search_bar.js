import React, { Component } from "react";

// const SearchBar = () => {
//   return <input />;
// }

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }
  render() {
    // return <input onChange={this.onInputChange} />;
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          // onChange={event => {
          //   // console.log(event.target.value);
          //   this.setState({
          //     term: event.target.value
          //   });
          // }}
          onChange={event => this.onInputChange(event.target.value)}
        />
        {/* <h5>Value of the input: {this.state.term}</h5> */}
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
