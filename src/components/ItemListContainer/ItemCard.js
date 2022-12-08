function ItemCard({ id, name, image, origin }) {
  return (
    <div key={id} className="card mb-3" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top img-fluid" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Origen Conocido: {origin}</p>
        <a href="index.html" className="btn btn-primary">
          Detalles
        </a>
      </div>
    </div>
  );
}

export default ItemCard;
