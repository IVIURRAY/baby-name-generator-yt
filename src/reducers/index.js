import { combineReducers } from 'redux';

const initState = {
  forename: 'Haydn',
  surname: 'SWE'
}

const currentNameReducer = (state=initState, action) => {
  if (action.type === "SET_CURRENT_FORENAME") {
    return Object.assign({}, state, {forename: action.payload})
  } else if (action.type === "SET_CURRENT_SURNAME") {
    return Object.assign({}, state, {surname: action.payload})
  }

  return state;
}

const filtersInitState = { 
  isBoy: true, 
  firstNameChar: null 
}

const filtersReducer = (state=filtersInitState, action) => {
  if (action.type === 'SET_GENDER_FILTER') {
    return Object.assign({}, state, { isBoy: action.payload === 'BOY' })
  } else if (action.type === 'SET_FIRST_NAME_CHAR') {
      return Object.assign({}, state, { firstNameChar: action.payload })
  }

  return state;
}

export default combineReducers({
  currentName: currentNameReducer,
  filters: filtersReducer,
})