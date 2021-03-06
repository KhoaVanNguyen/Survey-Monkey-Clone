import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Link } from "react-router-dom";
import validateEmails from "../../utils/validateEmails";
import FIELDS from './surveyFieldData'
class SurveyForm extends Component {
  renderFields() {
    return FIELDS.map(({ label, name }) => {
      return (
        <Field
          key={name}
          label={label}
          name={name}
          type="text"
          component={SurveyField}
        />
      );
    });
  }
  render() {
    console.log('props')
    // console.log(this.props.surveyForm);
    return <div>
        <h2> SurveyForm </h2>
        <form onSubmit={this.props.handleSubmit( (values) =>  this.props.onSurveySubmit(values)   ) }>
          {this.renderFields()}
          <Link to="/surveys" className="btn-flat red white-text">
            Cancel
            <i className="material-icons left"> cancel </i>
          </Link>
          <button className="teal btn-flat white-text right" type="submit">
            {" "}Next
            <i className="material-icons right"> done </i>
          </button>
        </form>
      </div>;
  }
}

function validate(values) {
  const errors = {};
  errors.recipients = validateEmails(values.recipients || " ");
  FIELDS.forEach(({ name, error }) => {
    if (!values[name]) {
      errors[name] = error;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
