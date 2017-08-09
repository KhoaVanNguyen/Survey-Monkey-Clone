import axios from "axios";
import { FETCH_USER, SEND_SURVEY, FETCH_SURVEY } from "./type";

export const fetchUser = () => async dispatch => {
  const response = await axios.get("/api/current_user");
  console.log("in action " + JSON.stringify(response.data));
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const handleToken = (token) => async dispatch => {
  console.log('token in handle Token')
  console.log(token.id)
  const res = await axios.post('/api/stripe', {id: token.id } )
  dispatch({ type: FETCH_USER, payload: res.data })
}
export const sendSurvey = formValues => async dispatch => {
  console.log(formValues)
  const res = await axios.post('/api/surveys', formValues )
  dispatch({ type: SEND_SURVEY, payload: res  });
}
export const fetchSurvey = () => async dispatch => {
  const res = await axios.get('/api/surveys')
  dispatch({ type: FETCH_SURVEY, payload: res.data.results  })
}