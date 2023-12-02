import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div
      style={{ width: "100%", height: "300px" }}
      className="d-flex  flex-column 
    justify-content-center align-items-center border mt-5 bg-body-tertiary"
    >
      <div className="footer-div d-flex justify-content-evenly w-100 flex-wrap">
        <div className="website " style={{ width: "400px" }}>
          <h4>
        <i style={{overflowY:"hidden"}} class="fa-brands fa-cotton-bureau"></i>TeeRex
          </h4>
          <h6>
            Designed and built with all the love in the world by the luminr team
            with the help of our contributors.
          </h6>
          <h6>Code licensed luminar, docs CC BY 3.0.</h6>
          <p>Currently v1.0.0.</p>
        </div>
        <div className="links d-flex  flex-column">
          <h4>Links</h4>
          <Link to={"/Cart"} style={{ textDecoration: "none" }}>
            {" "}
            Cart
          </Link>
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            {" "}
            Home
          </Link>

          <Link
            to={"/Wishlist"}
            style={{ textDecoration: "none" }}
          >
            {" "}
            Wishlist
          </Link>
        </div>
        <div className="guides d-flex  flex-column">
          <h4>guides</h4>
          <Link
            to={"https://getbootstrap.com/"}
            style={{ textDecoration: "none" }}
          >
            {" "}
            React
          </Link>
          <Link
            to={"https://react-bootstrap.netlify.app/"}
            style={{ textDecoration: "none"}}
          >
            {" "}
            React bootstrap
          </Link>

          <Link
            to={"/watch-history"}
            style={{ textDecoration: "none"}}
          >
            {" "}
            Routing
          </Link>
        </div>
        <div className="contacts">
          <h4>Contact Us</h4>
          <div className="sub d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="enter your email"
            />
            <button className="btn btn-primary   ms-3"><i class="fa-solid fa-arrow-right fs-6"></i></button>
          </div>
          <div className="icons fs-4 d-flex justify-content-evenly mt-4">
          
          <Link
              to={"https://mail.google.com/"}
              style={{ textDecoration: "none" }}
            >
              <i style={{overflowY:"hidden"}}  class="fa-solid fa-envelope"></i>{" "}
            </Link>

            <Link
              to={"https://getbootstrap.com/"}
              style={{ textDecoration: "none" }}
            >
              <i style={{overflowY:"hidden"}}  className="fa-brands fa-facebook"></i>{" "}
            </Link>

            <Link
              to={"https://react-bootstrap.netlify.app/"}
              style={{ textDecoration: "none" }}
            >
              <i style={{overflowY:"hidden"}}  className="fa-brands fa-twitter"></i>{" "}
            </Link>

            <Link
              to={"/watch-history"}
              style={{ textDecoration: "none" }}
            >
              <i style={{overflowY:"hidden"}}  className="fa-brands fa-github"></i>{" "}
            </Link>

            <Link
              to={"/watch-history"}
              style={{ textDecoration: "none" }}
            >
              <i style={{overflowY:"hidden"}}  className="fa-brands fa-linkedin-in"></i>{" "}
            </Link>
          </div>
        </div>
      </div>
      <p>copyright @ 2023 TeeRex. buit with React.</p>
    </div>
  );
}

export default Footer;