import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Landing from './Landing'
import { connect } from "react-redux";
import { fetchUser } from "../actions/index";

const Dashboard = () => <div> Dashboard </div>;
const SurveyNew = () => <div> SurveyNew </div>;
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

export default connect(null, { fetchUser })(App);
