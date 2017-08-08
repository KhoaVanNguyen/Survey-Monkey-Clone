import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
const FIELDS = [
  { label: "Title", name: "title" },
  { label: "Subject", name: "subject" },
  { label: "Body", name: "body" },
  { label: "Recipients", name: "recipients" }
];
class SurveyForm extends Component {
  renderFields() {
    return FIELDS.map(({label,name}) => {
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
    console.log(this.props);
    return (
      <div>
        <h2> SurveyForm </h2>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button className='btn' type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyForm);
