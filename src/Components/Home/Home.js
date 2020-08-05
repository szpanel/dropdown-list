import React from "react";
import { Redirect } from "react-router";

function Home(props) {
  return <Redirect to="/users/3"></Redirect>;
}

export default Home;
