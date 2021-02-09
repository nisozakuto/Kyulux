import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>Kyulux</div>
        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/search">
              <li>Search</li>
            </Link>
          </ul>
        </nav>
      </header>
    );
  }
}
