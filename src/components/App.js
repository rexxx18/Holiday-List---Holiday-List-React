import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let countries = ["Goa(India)", "Lonavala(India)", "Darjeeling(India)"];
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
