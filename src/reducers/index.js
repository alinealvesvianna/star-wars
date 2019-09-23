import {
  SET_PEOPLE_DETAILS,
  API_START,
  API_END,
  FETCH_PEOPLE,
  FETCH_STARSHIPS,
  SET_STARSHIPS_DETAILS,
} from "../actions/types";

export default function(state = {
  isLoadingData: false,
  people: [],
  startships: [],
}, action) {
  console.log("action type => ", action.type);
  switch (action.type) {
    case SET_PEOPLE_DETAILS:
      return { 
        ...state,
        people:state.people.concat(action.payload.results),
    };
    case SET_STARSHIPS_DETAILS:
      return { 
        ...state,
        startships: state.startships.concat({
          ...action.payload,
          namePerson: action.parameter
        }),
    };    
    case API_START:
      if (action.payload === FETCH_PEOPLE || FETCH_STARSHIPS) {
        return {
          ...state,
          isLoadingData: true
        };
      }
      break;
    case API_END:
      if (action.payload === FETCH_PEOPLE || FETCH_STARSHIPS) {
        return {
          ...state,
          isLoadingData: false
        };
      }
      break;
    default:
      return state;
  }
}