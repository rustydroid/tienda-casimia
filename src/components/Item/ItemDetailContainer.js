import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function ItemDetails() {
  const [items, setItems] = useState();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const { category, id } = useParams();

  const getRM = async () => {
    const itemsParse = await JSON.parse(localStorage.getItem("rick_morty"));
    const result = itemsParse.filter((item) => item.id === parseInt(id));
    setItems(result);
    setName(result[0].name);
    setImage(result[0].image);
  };

  const getSW = async () => {
    const itemsParse = await JSON.parse(localStorage.getItem("star_wars"));
    const result = itemsParse.filter((item) => item.id === parseInt(id));
    setItems(result);
    setName(result[0].name);
    setImage(result[0].image);
  };

  useEffect(() => {
    if (category === "rick_and_morty") {
      getRM();
    } else if (category === "star_wars") {
      getSW();
    }
  }, [category,id]);

  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={image}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">SKU: BST-498</div>
              <h1 className="display-5 fw-bolder">{name}</h1>
              <div className="fs-5 mb-5">
                <span className="text-decoration-line-through">$45.00</span>
                <span>$40.00</span>
              </div>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium at dolorem quidem modi. Nam sequi consequatur
                obcaecati excepturi alias magni, accusamus eius blanditiis
                delectus ipsam minima ea iste laborum vero?
              </p>
              <div className="d-flex">
                <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="num"
                  defaultValue="1"
                  style={{ maxWidth: "3rem" }}
                />
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                >
                  <i className="bi-cart-fill me-1"></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
