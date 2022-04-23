import React, { Component } from "react";

export default class OldBatchUpdate extends Component {
  state = { age: 0 };

  handleClick = () => {
    this.setState({ age: this.state.age + 1 });
    console.log(this.state.age);
    this.setState({ age: this.state.age + 1 });
    console.log(this.state.age);
    this.setState({ age: this.state.age + 1 });
    console.log(this.state.age);
    this.setState({ age: this.state.age + 1 });
    console.log(this.state.age);
    setTimeout(() => {
      this.setState({ age: this.state.age + 1 });
      console.log(this.state.age);
      this.setState({ age: this.state.age + 1 });
      console.log(this.state.age);
    });
  };
  render() {
    return (
      <div>
        <span>{this.state.age}</span>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}
