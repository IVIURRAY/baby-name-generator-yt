import { connect } from "react-redux";
import SavedNames from '../components/savedNames';
import { addToFavourites } from '../actions'

const mapStateToProps = state => ({
  historicNames: state.history,
  favouriteNames: state.favourites
})

const mapDispatchToProps = dispatch => ({
  addToFavs: name => dispatch(addToFavourites(name))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedNames)