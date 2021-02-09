import React, { Component } from "react";
import Header from "./components/Header";
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
  componentDidMount() {}
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

  route = (e) => {
    console.log(e);
    fetch(
      `https://api.fda.gov/drug/drugsfda.json?search=products.marketing_status:${e}&limit=${this.state.limit}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ marketing_status: data });
      });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <section className="marketingStatusSection">
            <h3>Marketing Status</h3>
            <aside className="marketingStatus">
              <button
                value="Discontinued"
                onClick={(e) => this.route(e.target.value)}
              >
                Discontinued
              </button>
              <button
                value="Prescription"
                onClick={(e) => this.route(e.target.value)}
              >
                Prescription
              </button>
              <button
                value="None (Tentative Approval)"
                onClick={(e) => this.route(e.target.value)}
              >
                None (Tentative Approval)
              </button>
              <button
                value="Over-the-counter"
                onClick={(e) => this.route(e.target.value)}
              >
                Over-the-counter
              </button>
            </aside>
          </section>
          <section>
            {this.state.marketing_status.results ? (
              this.state.marketing_status.results.map((e) => {
                return <li key={e.application_number}>{e.sponsor_name}</li>;
              })
            ) : (
              <p>nOthign</p>
            )}
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
