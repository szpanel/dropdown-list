import React from "react";
import "../IsDone.css";

class IsDone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDone: props.isDone,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const isDone = this.state.isDone;
    const isDoneClass = isDone ? "Is" : "Not";
    const classes = `IsDone ${isDoneClass}`;
    return <div className={classes} onClick={this.handleClick}></div>;
  }

  handleClick(e) {
    this.setState((state) => ({ isDone: !state.isDone }));
  }
}
export default IsDone;
