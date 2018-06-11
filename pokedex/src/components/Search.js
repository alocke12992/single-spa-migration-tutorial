import React from 'react'

const Search = ({ onChange }) => (
  // <input
  //   type="text"
  //   onChange={onChange}
  //   placeholder="Enter pokemon name..."
  // />
  <div class="input-field col s6">
    <input placeholder="Ender a pokemon name..." onChange={onChange} id="pokemonName" label="Pokemon Search" type="text" className="validate" />
  </div>
)

export default Search
