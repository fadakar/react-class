/*
    import React from 'react'
    class MyComponent extends React.Component {
        ....
        render() {
            ...
            return jsx
        }
    }

    import React, { Component } from 'react'
    class MyComponent extends Component {
        ....
        render() {
            ...
            return jsx
        }
    }
*/
import React, { Component } from "react";

const style = {
  backgroundColor: "#ccc",
  textAlign: "center",
  padding: "32px",
  marginBottom: "20px",
};

export class ClassComponet1 extends React.Component {
  render() {
    return (
      <div style={style}>
        <h2>Hello Class Componet</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          doloremque nihil et rem fuga totam odit optio, mollitia porro corporis
          voluptate, adipisci sed ad maxime placeat tenetur facere numquam
          quibusdam!
        </p>
      </div>
    );
  }
}
export class ClassComponet2 extends Component {
  render() {
    return (
      <div style={style}>
        <h2>{this.props.title}</h2>
        <p>
          {this.props.message}
        </p>
        {this.props.children}
      </div>
    );
  }
}
