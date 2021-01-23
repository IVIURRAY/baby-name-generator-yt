import { connect } from "react-redux"
import Names from '../components/names';

const mapStateToProps = state => ({
  forename: state.currentName.forename,
  surname: state.currentName.surname,
})

export default connect(
  mapStateToProps,
  null
)(Names)