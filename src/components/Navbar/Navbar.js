import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import MyLogo from "../images/logo.svg";
import LoginWidget from "../LoginWidget/LoginWidget";

const Navbar = () => {
  return (

    <>
      <div>
        {/* Navigation --> */}
        <nav className="navbar navbar-expand-sm navbar-light bg-light m-3">
          <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
              <img src={MyLogo} alt="" width="60" height="34" />
            </a>

            <div style={{ float: "center" }}>
              {/* <button style={{float:'right'}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button> */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="index.tml">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="index.tml">
                    Productos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="index.tml">
                    Ofertas Lighting
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="index.tml">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <CartWidget />
            <LoginWidget />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
