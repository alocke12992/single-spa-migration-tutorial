import React from 'react'

const Search = ({ onChange }) => (
  <div className="input-field col s6">
    <input placeholder="Ender a pokemon name..." onChange={onChange} id="pokemonName" label="Pokemon Search" type="text" className="validate" />
  </div>
)

export default Search
