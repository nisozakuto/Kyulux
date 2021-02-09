import React, { Component } from "react";

export default class Browse extends Component {
  constructor() {
    super();
    this.state = { marketing_status: "", limit: 99 };
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
      <main>
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
      </main>
    );
  }
}
