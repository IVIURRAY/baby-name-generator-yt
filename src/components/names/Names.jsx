import React from 'react'
import './Names.css';

function Names (props) {
  const {forename, surname} = props;

  return (
    <section className="namesContainer">
      <section className="firstname">{forename}</section>
      <section className="surname">{surname}</section>
    </section>
  )
}

export default Names;