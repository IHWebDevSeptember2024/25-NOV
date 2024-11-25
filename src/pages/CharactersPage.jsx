import { useEffect, useState } from "react";
import "./CharactersPage.css";

function CharactersPage() {
  const [characters, setCharacters] = useState([]);

  async function getCharacters() {
    try {
      const response = await fetch(
        "https://dragonball-api.com/api/characters?limit=200"
      );

      const jsonResponse = await response.json();
      setCharacters(jsonResponse.items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <ul className="cards-container">
      {characters.map((eachCharacter) => {
        return (
          <li className="card" key={eachCharacter.id}>
            <img src={eachCharacter.image} alt={eachCharacter.name} />
            <h3>{eachCharacter.name}</h3>
          </li>
        );
      })}
    </ul>
  );
}

export default CharactersPage;
