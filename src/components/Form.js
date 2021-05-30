import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [pokemonName, setPokemonName] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      console.log(response.data);
    } catch (e) {
      console.log("Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="pokemon-name">
        <label htmlFor="pokemon-name">Provide the pokemon's name: </label>
        <input
          onChange={(e) => setPokemonName(e.target.value.toLowerCase())}
          type="text"
          name="pokemon-name"
          placeholder="ex. Bulbasaur"
          autoFocus
          required
        />
      </div>
      <div className="submit">
        <button>Submit</button>
      </div>
    </form>
  );
}

export default Form;
