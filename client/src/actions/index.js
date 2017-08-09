import axios from "axios";
import { FETCH_USER, SEND_SURVEY, FETCH_SURVEY, DELETE_SURVEY } from "./type";

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
  try {
    const res = await axios.get('/api/surveys')  
    dispatch({ type: FETCH_SURVEY, payload: res.data.results });
  } catch (error) {
    // dispatch({ type: FETCH_SURVEY, payload: [] });  
    console.log('cant fetch Survey')
  }
  
}
export const deleteSurvey = id => async dispatch => {
  const url = `/api/surveys/${id}`
  try {
    const res = await axios.delete(url)
    dispatch({ type: DELETE_SURVEY, payload: id});
  } catch (error) {
    // dispatch({ type: DELETE_SURVEY, payload: [] });  
    console.log('cant delete survey')
  
  }
}