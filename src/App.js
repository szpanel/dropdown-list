import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Todos from "./Components/Todos";
import "./App.css";
import Home from "./Components/Home/Home";
import User from "./Components/User/User";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users/:id" component={User} />
        <Route path="/temp" component={Todos} />
      </Switch>
    </Router>
  );
}

export default App;
