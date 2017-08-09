import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SurveyList from './surveys/SurveyList'
import { connect } from "react-redux";
import { fetchUser, fetchSurvey } from "../actions/index";
class Dashboard extends Component{
    componentDidMount(){
      this.props.fetchSurvey()
    }
    render(){
        return <div>
            <h1> WELCOME TO DASHBOARD </h1>
            <SurveyList />
            <div style={{ position: "absolute", bottom: "10px", right: "10px" }}>
              <Link to="/surveys/new" className="btn-floating btn-large waves-effect waves-light red">
                <i className="material-icons">add</i>
              </Link>
            </div>
          </div>;
    }
}

export default connect(null, { fetchSurvey })(Dashboard);