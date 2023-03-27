import React, { Component } from "react";

export default class Sample extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.message}
        </p>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState){
    console.log(prevProps)
    console.log(this.props)
  }
}
