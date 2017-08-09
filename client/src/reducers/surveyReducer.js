import { FETCH_SURVEY, DELETE_SURVEY } from "../actions/type";
export default (state = [], action  ) =>{
    console.log(state)
    switch (action.type) {
        case FETCH_SURVEY:
            return action.payload
        case DELETE_SURVEY:
            return state.filter( ({ _id }) => _id !== action.payload  )
        default:
            return state
    }
}