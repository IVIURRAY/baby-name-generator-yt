const addHistoricName = payload => {
  return { type: 'ADD_HISTORIC_NAME', payload }
}

const addToFavourites = payload => {
  return { type: 'ADD_FAV_NAME', payload }
}

const setCurrentForename = payload => {
  return {type: 'SET_CURRENT_FORENAME', payload}
}

const setCurrentSurname = payload => {
  return {type: 'SET_CURRENT_SURNAME', payload}
}

const setFilterGender = payload => {
  return {type: 'SET_GENDER_FILTER', payload}
}

const setFilterFirstNameChar = payload => {
  return {type: 'SET_FIRST_NAME_CHAR', payload}
}


export {
  addToFavourites,
  addHistoricName,
  setCurrentForename,
  setCurrentSurname,
  setFilterGender,
  setFilterFirstNameChar
}