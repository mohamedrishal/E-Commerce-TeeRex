import React from 'react'
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromWishlist } from "../redux/Slices/wishlistSlice";
import { addToCart } from '../redux/Slices/cartSlice';

function Wishlist() {
  const WishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()


  const handleWishlistCart = (product) =>{
      dispatch (addToCart(product))
      dispatch (removeFromWishlist(product.id))
  }

  return (
    <div style={{marginTop:'100px'}} className='container'>
      <Row>
        {
          WishlistArray.length>0?WishlistArray.map((product,index)=>(
            <Col key={index} className="mb-5" sm={12} md={6} lg={4} xl={3}>
            <Card className="shadow rounded-top  p-1" style={{ width: "16rem",height:"26rem" }}>
              <Card.Img variant="top" height={'150px'} src={product?.image} />
              <Card.Body>
                <Card.Title style={{fontSize:"15px"}}>{product?.title.slice(0, 28)}</Card.Title>
                <Card.Text>
                  <p style={{fontSize:"15px"}}>{product?.description.slice(0, 40)}...</p>
                  <h5>$ {product?.price}</h5>
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button onClick={()=>dispatch(removeFromWishlist(product.id))} className="btn border rounded ">
                    <i className="fa-solid fa-trash text-danger"></i>
                  </Button>
                  <Button onClick={()=>{handleWishlistCart(product)}} className="btn border rounded ">
                    <i className="fa-solid fa-cart-plus text-success"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          )):<div style={{height:'60vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
            <img height={'230px'} src="https://cdn-icons-gif.flaticon.com/8797/8797960.gif" alt="" />
            <h3 className='fw-bolder text-primary'>Your Wishlist is Empty!!</h3>
            <Link className='text-decoration-none btn btn-success rounded mt-3' to={'/'}>Back to Home</Link>
          </div>
        }
      </Row>
    </div>
  )
}

export default Wishlist