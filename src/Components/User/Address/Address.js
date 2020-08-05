import React from "react";

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: props.address,
    };
  }
  render() {
    return <>Address</>;
  }
}

export default Address;
