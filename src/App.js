import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import Browse from "./components/Browse";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: "",
      topLevelSelection: "",
      limit: 99,
      route: "",
      marketing_status: "",
    };
  }
  fecthData(topLevelSelection) {
    fetch(
      `http://api.fda.gov/drug/drugsfda.json?search=products.route:topical&limit=${this.state.limit}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ searchResults: data });
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/search" render={() => <Search />} />
          <Route exact path="/browse" render={() => <Browse />} />
        </div>
      </div>
    );
  }
}
