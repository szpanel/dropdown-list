import React from "react";
import "./User.css";
import UserInfo from "./UserInfo/UserInfo";
import Address from "./Address/Address";
import Company from "./Company/Company";

import Loading from "../Loading/Loading";
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.match.params.id,
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.state.userId}`)
      .then((response) => response.json())
      .then((response) => this.setState({ user: response }));
    fetch(
      `https://jsonplaceholder.typicode.com/users/${this.state.userId}/todos`
    )
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          todos: response.filter((item) => !item.completed).length,
          isLoaded: true,
        })
      );
  }

  isMuch = (todos) => (todos > 10 ? "" : "just");

  render() {
    if (!this.state.isLoaded) {
      return <Loading />;
    }
    const user = this.state.user;
    const todosCount = `${this.isMuch(this.state.todos)} ${
      this.state.todos
    } tasks to do.`;
    return (
      <div className="container">
        <div className="d-flex justify-content-around">
          <p className="h5">
            Hello {user.name}! You have {todosCount}
          </p>
        </div>

        <UserInfo user={user}></UserInfo>
        <Address></Address>
        <Company></Company>
      </div>
    );
  }
}

export default User;
