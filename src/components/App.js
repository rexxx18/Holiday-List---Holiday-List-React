import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let countries = [
      "Goa(India)",
      "Lonavala(India)",
      "Darjeeling(India)",
      "Amsterdam(Netherlands)",
      "New York(USA)",
      "Tokyo(Japan)"
    ];
    return (
      <>
        <ol>
          {countries.map((country, index) => (
            <li key={"location" + (index + 1)}>{country}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
