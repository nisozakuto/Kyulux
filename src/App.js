import React, { Component } from "react";
import Header from "./components/Header";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      myData: "",
    };
  }
  componentDidMount() {
    this.fecthData();
  }
  fecthData() {
    fetch(`https://api.fda.gov/drug/drugsfda.json?limit=1`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ myData: data });
      });
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
