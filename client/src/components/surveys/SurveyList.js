import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurvey, deleteSurvey } from "../../actions/index";
class SurveyList extends Component {

  renderContent() {
      console.log('this.props.surveyList')
      console.log(this.props.surveyList)
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
      return <div key={item.dateSent} style={{ borderWidth: "5px", borderColor: "blue" }}>
          <h6>
            {" "}{item.title}{" "}
          </h6>
          <p>
            {" "}{item.subject}{" "}
          </p>
          <p>
            {" "}{item.body}{" "}
          </p>
          <button onClick={() => this.props.deleteSurvey(item._id)} className="btn right red white-text">
            Delete
          </button>
        </div>;
    });
  }

  render() {
    console.log('in render')
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = ({ survey }) => {
  console.log("in mapStateToProps");
  console.log(survey)
  return {
    surveyList: survey
  };
};

export default connect(mapStateToProps, { fetchSurvey, deleteSurvey})(SurveyList);
