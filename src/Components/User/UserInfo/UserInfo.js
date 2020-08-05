import React from "react";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
    };
  }
  render() {
    const user = this.state.user;
    return (
      <section name="acc-info">
        <p>Username: {user.username}</p>
        <p>
          email: <a href={`mailto:${user.email}`}>{user.email}</a>
        </p>
        <p>phone: {user.phone}</p>
        <p>
          website: <a href={user.website}>{user.website}</a>
        </p>
      </section>
    );
  }
}

export default UserInfo;
