import React from "react";
// import HeroImage from "../images/ecommerce.jpg";

const ItemListContainer = () => {
  return (
    <>
      {/* <div className="container row rounded text-center">
        <img
          src={HeroImage}
          className="img-fluid rounded float-center"
          alt="open sign"
        ></img>
      </div> */}
      <div className="container-fluid row">
        <h1
          className="display-1 text-center mx-2"
          style={{ backgroundColor: "lightblue" }}
        >
          Bienvenidos a Tienda Casimia
        </h1>
      </div>
    </>
  );
};

export default ItemListContainer;
