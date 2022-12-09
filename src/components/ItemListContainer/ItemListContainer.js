import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCard from "../Item/ItemCard";

const ItemListContainer = () => {
  const [characters, setCharacters] = useState([]);
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const fetchCharactersSW = async () => {
    const response = await fetch(
      "https://akabab.github.io/starwars-api/api/all.json"
    );
    const data = await response.json();
    setCharacters(data);
    localStorage.setItem('star_wars', JSON.stringify(data));
  };

  const fetchCharactersRM = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setCharacters(data.results);
    localStorage.setItem('rick_morty', JSON.stringify(data.results));
  };

  useEffect(() => {
    if (categoryId === "rick_and_morty") {
      fetchCharactersRM();
    } else if (categoryId === "star_wars") {
      fetchCharactersSW();
    } else {
      navigate("/not_found");
    }
  }, [categoryId]);

  

  return (
    <>
      <div className="container">
        <div className="container-fluid text-center">
          <h1>
            {categoryId === "rick_and_morty" ? "Rick and Morty" : "Star Wars"}
          </h1>
          <div className="row mb-3 mt-2 m-auto justify-content-between">
            {characters.map((item) => {
              return (
                <ItemCard
                  key={ item.id }
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  category={categoryId}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
