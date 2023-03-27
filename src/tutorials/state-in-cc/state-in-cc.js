import React, { Component } from "react";
import Sample from "./sample";

export default class StateInCC extends Component {
  constructor() {
    super();
    // console.log(this);
    this.onclickHandlerNormal = this.onclickHandlerNormal.bind(this);

    this.state = {
      display: "block",
      isVisible: false,
      message: "Sample Message",
    };
  }
  isVisible = true;

  onclickHandlerNormal() {
    console.log("Test");
    console.log(this);
    console.log(this.isVisible);
  }

  onclickHandlerArrow = () => {
    console.log(this);
  };

  onToggleShowHandler = () => {
    this.isVisible = !this.isVisible;
    console.log(this.isVisible);
    this.forceUpdate();
  };

  onToggleDisplayHandler = () => {
    const newState = {
      ...this.state,
    };
    newState.display = this.state.display === "block" ? "none" : "block";

    this.setState(newState);
  };

  onToggleVisibleHandler = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div>
        <button onClick={this.onclickHandlerNormal}>Test Event Normal</button>
        <button onClick={this.onclickHandlerArrow}>Test Event Arrow</button>
        <hr />
        <button onClick={this.onToggleShowHandler}>
          Toggle Show (forceUpdate)
        </button>

        <button onClick={this.onToggleDisplayHandler}>
          Toggle Show (State display)
        </button>
        <button onClick={this.onToggleVisibleHandler}>
          Toggle Show (State isVisible)
        </button>

        <hr />
        <button onClick={()=> {
            this.setState({message: this.state.message + ', Added New Message'})
        }}>Add Message</button>

        <div style={{ display: !this.isVisible ? "none" : null }}>
          <div style={{ display: this.state.display }}>
            {/* {this.state.isVisible ? <Sample /> : null} */}
            {this.state.isVisible && <Sample message={this.state.message} />}
          </div>
        </div>
      </div>
    );
  }
}
