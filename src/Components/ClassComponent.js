import React, { Component } from "react";

export default class ClassComponent extends Component {
  render() {
    const classText = "ClassComponent";
    return <div className="classComp">{classText}</div>;
  }
}
