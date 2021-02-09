import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: "",
    };
  }

  render() {
    return (
      <main className="search-page">
        <aside className="search-box">
          <form onSubmit={(e) => this.props.handleSearchSubmit(e)}>
            <input
              type="text"
              name="term"
              placeholder="What should we search today?"
              onChange={this.props.handleInputChange}
            />
            <input type="submit" value="Submit" />
          </form>
        </aside>
        <article className="search-results">
          {this.props.searchResults && this.props.searchResults.results[0] ? (
            this.props.searchResults.results.map((e) => <p>{e.sponsor_name}</p>)
          ) : (
            <p>To get results please do a search</p>
          )}
        </article>
      </main>
    );
  }
}
