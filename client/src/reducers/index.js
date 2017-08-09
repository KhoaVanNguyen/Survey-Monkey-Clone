import authReducer from './authReducer'
import surveyReducer from "./surveyReducer";
import { combineReducers  } from 'redux'
import { reducer as formReducer  } from 'redux-form'
export default combineReducers({
  auth: authReducer,
  form: formReducer,
  survey: surveyReducer
});