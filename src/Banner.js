import React, { Component } from "react";
import {Jumbotron, Button} from "react-bootstrap"

const styles = {
    "margin-left": "100px",
    "padding": "50px 30px 50px 80px"
};

class Banner extends Component {

  render(){
    return (
      <Jumbotron>
      <div style={styles}>
        <h1>Hello, world!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
      </div>
      </Jumbotron>
    );
  }
}

export default Banner
