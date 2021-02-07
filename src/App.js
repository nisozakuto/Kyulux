import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: "",
    };
  }
  componentDidMount() {
    this.fecthData();
  }
  fecthData() {
    fetch(
      `https://api.fda.gov/drug/drugsfda.json?search=products.marketing_status:"Discontinued"`,
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
      <div>
        <Header />
        <div className="container">
          <section className="marketingStatusSection">
            <h3>Marketing Status</h3>
            <aside className="marketingStatus">
              <button>Discontinued</button>
              <button>Prescription</button>
              <button>None (Tentative Approval)</button>
              <button>Over-the-counter</button>
            </aside>
          </section>
          {this.state.searchResults && this.state.searchResults.results ? (
            <p>Data</p>
          ) : (
            <p>no Data</p>
          )}
        </div>
      </div>
    );
  }
}
