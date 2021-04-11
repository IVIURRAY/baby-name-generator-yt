import React from 'react'
import './SavedNames.css';
import HistoricNames from './HistoricNames'

function SavedNames(props) {
  const { historicNames } = props;
  return (
    <section className="saved-names">
      <HistoricNames names={historicNames} />
    </section>
  )
}

export default SavedNames;