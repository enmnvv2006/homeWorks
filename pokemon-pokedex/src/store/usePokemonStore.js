import { create } from 'zustand'

export const usePokemonStore = create((set) => ({
  caughtPokemons: [],
  catchPokemon: (pokemon) =>
    set((state) => {
      if (state.caughtPokemons.some((item) => item.id === pokemon.id)) {
        return state
      }

      return {
        caughtPokemons: [...state.caughtPokemons, pokemon],
      }
    }),
}))
