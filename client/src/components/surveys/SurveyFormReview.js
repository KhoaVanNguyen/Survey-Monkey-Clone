import React from "react";
import { connect } from "react-redux";
import FIELDS from "./surveyFieldData";
import { sendSurvey } from "../../actions/index";
import { Link } from "react-router-dom";
const SurveyFormReview = ({ formValues, onCancel, sendSurvey }) => {
  function renderFields() {
    console.log(formValues);
    const fieldJSX = FIELDS.map(({ label, name }) => {
      return (
        <div key={name}>
          <h6>
            {label}:{" "}
          </h6>
          <p>
            {formValues[name]}
          </p>
        </div>
      );
    });
    console.log(fieldJSX);
    return fieldJSX;
  }
  return (
    <div>
      <h5> Please confirm your details </h5>
      {renderFields()}
      <button className="btn red white-text" onClick={onCancel}>
        Back
      </button>
      <Link to="/surveys">
        <button
          className="btn green white-text right"
          onClick={() => sendSurvey(formValues)}
        >
          <i className="material-icons right"> email </i>
          Send Survey
        </button>
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { formValues: state.form.surveyForm.values };
};

export default connect(mapStateToProps, { sendSurvey })(SurveyFormReview);
