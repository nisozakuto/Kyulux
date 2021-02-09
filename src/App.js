import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import Browse from "./components/Browse";
import Footer from "./components/Footer";
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
      search: "",
      term: "",
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

  handleInputChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    this.setState({
      [name]: value,
    });
  };

  handleSearchSubmit = (e, parameter) => {
    e.preventDefault();
    fetch(`https://api.fda.gov/drug/drugsfda.json?search=${this.state.term}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ search: data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/search"
            render={() => (
              <Search
                handleSearchSubmit={this.handleSearchSubmit}
                handleInputChange={this.handleInputChange}
                searchResults={this.state.search}
              />
            )}
          />
          <Route exact path="/browse" render={() => <Browse />} />
        </div>
        <Footer />
      </div>
    );
  }
}
