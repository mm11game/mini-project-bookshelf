import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import BookUploadPage from "./pages/BookUploadPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MyBookPage from "./pages/MyBookPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" component={HomePage} exact />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/book" component={BookUploadPage} />
      <Route path="/mybook/" component={MyBookPage} />
    </Router>
  );
};

export default App;
