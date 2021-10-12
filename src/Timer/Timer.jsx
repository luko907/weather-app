import React, { Component } from "react";

export default class Time extends Component {
  state = {
    date: new Date(new Date().getTime() + this.props.timezone * 1000)
      .toUTCString()
      .replace(/ GMT$/, ""),
  };

  timeRefresh() {
    setInterval(() => {
      this.setState({
        date: new Date(new Date().getTime() + this.props.timezone * 1000)
          .toUTCString()
          .replace(/ GMT$/, ""),
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <span>{this.state.date}</span>
        {this.timeRefresh()}
      </div>
    );
  }
}
