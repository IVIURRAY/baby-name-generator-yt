import React from 'react'
import './SavedNames.css';
import HistoricNames from './HistoricNames'
import FavouriteNames from './FavouriteNames'

function SavedNames(props) {
  const { favouriteNames, historicNames, addToFavs } = props;
  return (
    <section className="saved-names">
      <HistoricNames names={historicNames} addToFavs={addToFavs}/>
      <FavouriteNames names={favouriteNames}/>
    </section>
  )
}

export default SavedNames;