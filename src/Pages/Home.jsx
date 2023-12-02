import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../redux/Slices/wishlistSlice";
import { addToCart } from "../redux/Slices/cartSlice";
import axios from "axios";

function Home({searchItem}) {
  // calling Hooks
  const dispatch = useDispatch();

  const [data, setData] = useState(null);

  useEffect(() => {
    const apiCalling = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
    };
    apiCalling()
  },[]);

  const [filteredData, setFilteredData] = useState([]);
  
  function filterProducts(searchItem) {
    const filtered = data?.filter(product =>
      product.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredData(filtered);
  }
  
  useEffect(() => {
    filterProducts(searchItem);
  }, [searchItem]);



  return (
  <>
  {
    searchItem ?  <Row className="ms-5" style={{ marginTop: "100px" }}>
    {filteredData?.length > 0 ? (
      filteredData?.map((product, index) => (
        <Col key={index} className="mb-5" sm={12} md={6} lg={4} xl={3}>
          <Card
            className="shadow rounded-top p-1"
            style={{ width: "16rem", height: "26rem" }}
          >
            <Card.Img
              variant="top"
            style={{height:"150px"}}
              src={product?.image}
            />
            <Card.Body>
              <Card.Title style={{fontSize:"15px"}}>{product?.title.slice(0, 28)}</Card.Title>
              <Card.Text>
                <p style={{fontSize:"15px"}}>{product?.description.slice(0, 40)}...</p>
                <h5>$ {product?.price}</h5>
              </Card.Text>
              <div className="d-flex justify-content-between">
                <Button
                  onClick={() => dispatch(addToWishlist(product))}
                  className="btn border rounded"
                >
                  <i className="fa-regular fa-heart text-danger "></i>
                </Button>
                <Button
                  onClick={() => dispatch(addToCart(product))}
                  className="btn border rounded"
                >
                  <i className="fa-solid fa-cart-plus text-success "></i>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))
    ) : (
      <p className="text-danger fw-bolder text-center my-5 fs-4">Nothing to display</p>
    )}
  </Row> :   <Row className="ms-5" style={{ marginTop: "100px" }}>
      {data?.length > 0 ? (
        data?.map((product, index) => (
          <Col key={index} className="mb-5" sm={12} md={6} lg={4} xl={3}>
            <Card
              className="shadow rounded-top p-1"
              style={{ width: "16rem", height: "26rem" }}
            >
              <Card.Img
                variant="top"
              style={{height:"150px"}}
                src={product?.image}
              />
              <Card.Body>
                <Card.Title style={{fontSize:"15px"}}>{product?.title.slice(0, 28)}</Card.Title>
                <Card.Text>
                  <p style={{fontSize:"15px"}}>{product?.description.slice(0, 40)}...</p>
                  <h5>$ {product?.price}</h5>
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button
                    onClick={() => dispatch(addToWishlist(product))}
                    className="btn border rounded"
                  >
                    <i className="fa-regular fa-heart text-danger "></i>
                  </Button>
                  <Button
                    onClick={() => dispatch(addToCart(product))}
                    className="btn border rounded"
                  >
                    <i className="fa-solid fa-cart-plus text-success "></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <p className="text-danger text-center my-5 fw-bolder fs-4">Nothing to display</p>
      )}
    </Row>
  }
  </>
  );
}

export default Home;
