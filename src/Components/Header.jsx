import React from "react";
import { Nav, Navbar, Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header({searchItem,setSearchItem}) {
  
  const Wishlist = useSelector((state) => state.wishlistReducer);
  const cart = useSelector((state) => state.cartReducer);

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary border shadow-lg position-fixed top-0 w-100 p-3  z-1"
    >
      <Container>
        <Navbar.Brand>
          <Link to={"/"} style={{ textDecoration: "none", fontWeight: "bold" }}>
            {" "}
            <i
              style={{ overflowY: "hidden" }}
              class="fa-brands fa-cotton-bureau"
            ></i>
            TeeRex
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div  className="d-flex ms-auto align-items-center  border rounded rounded-5 w-25 ">
            <input
              type="text"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              className="form-control py-2 px-5"
              placeholder="Search Products"
            />
            <i
              style={{ marginLeft: "-30px" }}
              class="fa-solid fa-magnifying-glass"
            ></i>
          </div>
          <Nav className="ms-auto">
            <Nav.Link
              style={{ fontSize: "12px" }}
              className="btn border rounded p-1"
            >
              <Link
                to={"/Wishlist"}
                className="d-flex align-items-center"
                style={{ textDecoration: "none", fontWeight: "bold" }}
              >
                <i class="fa-solid text-danger  fa-heart me-2"></i>Wishlist{" "}
                <Badge className="ms-2 rounded  me-2">{Wishlist.length}</Badge>{" "}
              </Link>
            </Nav.Link>
            <Nav.Link
              style={{ fontSize: "12px" }}
              className="btn border rounded p-1 ms-3"
            >
              <Link
                to={"/Cart"}
                className="d-flex align-items-center"
                style={{ textDecoration: "none", fontWeight: "bold" }}
              >
                <i class="fa-solid text-warning fa-cart-shopping me-2"></i>Cart{" "}
                <Badge className="ms-2 rounded  me-2">{cart.length}</Badge>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
