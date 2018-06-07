import {
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  FILTER_POKEMONS
} from '../constants/Page'

const initialState = {
  isFetched: false,
  pokemons: [],
  displayedPokemons: []
}

export default function page(state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMONS_REQUEST:
      return {
        isFetched: false,
        pokemons: state.pokemons,
        displayedPokemons: state.displayedPokemons
      }

    case FETCH_POKEMONS_SUCCESS:
      const { pokemons } = action

      return {
        pokemons,
        displayedPokemons: state.displayedPokemons,
        isFetched: false
      }

    case FILTER_POKEMONS:
      const { displayedPokemons } = action

      return {
        isFetched: false,
        pokemons: state.pokemons,
        displayedPokemons
      }

    default:
      return state
  }
}
