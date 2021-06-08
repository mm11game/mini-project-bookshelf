import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={Register} exact />
    </Router>
  );
};

export default App;
