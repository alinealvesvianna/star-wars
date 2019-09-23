import { SET_PEOPLE_DETAILS, API, FETCH_PEOPLE, FETCH_STARSHIPS, SET_STARSHIPS_DETAILS } from "./types";


export function fetchPeople(queryString) {
  return apiAction({
    queryString,
    onSuccess: setPeopleDetails,
    onFailure: () => console.log("Error occured loading articles"),
    label: FETCH_PEOPLE
  });
}


function setPeopleDetails(data) {
  return {
    type: SET_PEOPLE_DETAILS,
    payload: data
  };
}


export function fetchStarships(queryString, parameter) {
  return apiAction({
    queryString,
    parameter,
    onSuccess: setStarshipsDetails,
    onFailure: () => console.log("Error occured loading articles"),
    label: FETCH_STARSHIPS
  });
}

function setStarshipsDetails(data,parameter) {
  return {
    type: SET_STARSHIPS_DETAILS,
    payload: data,
    parameter,
  };
}


function apiAction({
  queryString,
  parameter,
  url = `${process.env.REACT_APP_BASE_URL}${queryString}`,
  method = "GET",
  data = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null
}) {
  return {
    type: API,
    payload: {
      parameter,
      url,
      method,
      data,
      onSuccess,
      onFailure,
      label,
      headersOverride
    }
  };
}