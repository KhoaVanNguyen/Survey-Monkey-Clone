import axios from "axios";
import { FETCH_USER } from "./type";

export const fetchUser = () => async dispatch => {
  const response = await axios.get("/api/current_user");
  console.log("in action " + JSON.stringify(response.data));
  dispatch({ type: FETCH_USER, payload: response.data });
};
