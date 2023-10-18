import React, { Component } from "react";
import Header from "./Header";
import Team from "./Team";


class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
    
  }



  render() {
    return (
      <div className="container mt-2">
        <Header />
        <Team />
      </div>

    )
  }
}

export default App