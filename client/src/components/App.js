import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";

const Landing = () => <div>Landing</div>;
const Dashboard = () => <div> Dashboard </div>;
const SurveyNew = () => <div> SurveyNew </div>;

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/surveys" component={Dashboard} />
        <Route path="/surveys/new" component={SurveyNew} />
      </div>
    </Router>
  );
};

export default App;
