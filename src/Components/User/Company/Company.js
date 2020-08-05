import React from "react";

class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: props.company,
    };
  }
  render() {
    return <>Company</>;
  }
}

export default Company;
