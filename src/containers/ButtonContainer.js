import { connect } from "react-redux";
import Buttons from '../components/buttons';
import {setCurrentForename, setCurrentSurname, setFilterFirstNameChar, setFilterGender} from '../actions'

const mapStateToProps = state => ({
  firstCharFilter: state.filters.firstNameChar,
  isBoyFilter: state.filters.isBoy,
})

const mapDispatchToProps = dispatch => ({
  setCurrentForename: name => dispatch(setCurrentForename(name)),
  setCurrentSurname: name => dispatch(setCurrentSurname(name)),
  setFirstNameFilter: char => dispatch(setFilterFirstNameChar(char)),
  setGenderFilter: gender => dispatch(setFilterGender(gender))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons)