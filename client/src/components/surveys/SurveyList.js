import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurvey } from "../../actions/index";
class SurveyList extends Component {
  componentWillMount() {
    console.log("data in survey list");
    console.log(this.props.surveyList);
  }

  renderContent() {
    if (this.props.surveyList.length <= 0) {
      return (
        <div>
          {" "}<h4>
            {" "}You haven't created any surveys yet!. Click + to add new{" "}
          </h4>{" "}
        </div>
      );
    }
    return this.props.surveyList.map(item => {
      return (
        <div key={item.dateSent}>
          <h6>
            {" "}{item.title}{" "}
          </h6>
          <p>
            {" "}{item.subject}{" "}
          </p>
          <p>
            {" "}{item.body}{" "}
          </p>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = ({ survey }) => {
  return {
    surveyList: survey
  };
};

export default connect(mapStateToProps, { fetchSurvey })(SurveyList);
