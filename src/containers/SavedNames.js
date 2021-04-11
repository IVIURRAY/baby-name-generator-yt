import { connect } from "react-redux";
import SavedNames from '../components/savedNames';
import {  } from '../actions'

const mapStateToProps = state => ({
  historicNames: state.history,
})



export default connect(
  mapStateToProps,
  null
)(SavedNames)