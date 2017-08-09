import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from './Dashboard'
import SurveyNew from './surveys/SurveyNew'
import { connect } from "react-redux";
import { fetchUser, fetchSurvey } from "../actions/index";

class App extends Component {
  componentDidMount() {
    console.log("componentDidMount");
    this.props.fetchUser();
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </Router>
    );
  }
}
export default connect(null, { fetchUser, fetchSurvey })(App);
