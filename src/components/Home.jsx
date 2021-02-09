import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <main className="home">
        <h1>Welcome to Kylux take away test page</h1>
        <p>
          This is a webapp where you can browse some of parts of the open FDA's
          dataset. I used the{" "}
          <a href="https://open.fda.gov/apis/drug/drugsfda/example-api-queries/">
            Drugs@FDA
          </a>{" "}
          endpoint. Please feel free to browse around the app and try different
          features.
        </p>
      </main>
    );
  }
}
