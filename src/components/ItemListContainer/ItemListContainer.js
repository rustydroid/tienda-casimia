import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
// import ItemRender from '../ItemRender/ItemRender'
// import ItemCard from "./ItemCard";


const ItemListContainer = () => {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json()
    setCharacters(data.results);
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  // Array.isArray(characters) ? console.log("Es un Arrays") : console.log("NO es un Array")
  

  return (
    <>
      <div className="container">
        <h1
          className="display-1 text-center mx-2"
          style={{ backgroundColor: "lightblue" }}
        >
          Bienvenidos a Framework
        </h1>
        <div className="container-fluid text-center">
          <div className="row mb-3 mt-2 m-auto justify-content-between">
            { characters.map((item) => {
              return(
                  <ItemCard id={ item.id } name={ item.name } image={ item.image } origin={item.origin.name } />
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
