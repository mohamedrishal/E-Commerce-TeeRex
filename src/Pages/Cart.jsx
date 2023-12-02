import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFromCart,emptyCart } from "../redux/Slices/cartSlice";
import { useState,useEffect } from "react";



function Cart() {

  const navigate = useNavigate()
  

  const CartArray = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();


  const [total,setTotal] = useState(0)

  const getCartTotal = ()=>{
    if(CartArray.length>0){
      setTotal(CartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  }


  const handleCart = ()=>{
    dispatch(emptyCart())
    alert("Order successfully Placed.. Thank You for Purchasing with us!!")
    navigate('/')
  }

  useEffect(()=>{
    getCartTotal()
  },[CartArray])

  return (
    <div className='container' style={{ marginTop: '100px' }}>
    {
      CartArray.length > 0 ?
        <div className="row mt-5">
          <div className='col-lg-7'>
            <table className='table shadow border'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  CartArray.map((product, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{product.title}</td>
                      <td><img width={'100px'} height={'70px'} src={product.image} alt="" /></td>
                      <td>${product.price}</td>
                      <td><button onClick={() => dispatch(removeFromCart(product.id))} className='btn'><i className="fa-solid fa-trash text-danger fa-2x"></i></button></td>

                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-4 mb-5'>
            <div className='border p-3 rounded shadow'>
              <h1 className='text-primary'>Cart Summary</h1>
              <h4 className='mt-5'>Total Products: <span> {CartArray.length} </span></h4>
              <h4>Total : <span className='text-danger fw-bolder fs-5'>${total}</span></h4>
              <div className='d-grid mt-5'>
                <button onClick={handleCart} className='btn btn-success rounded'>CheckOut</button>
              </div>
            </div>
          </div>
        </div>
        : <div style={{ height: '60vh' }} className='w-100 d-flex flex-column justify-content-center align-items-center'>
          <img height={'230px'} src="https://cdn-icons-gif.flaticon.com/8797/8797960.gif" alt="" />
          <h3 className='fw-bolder text-primary'>Your Cart is Empty!!!</h3>
          <Link style={{ textDecoration: 'none' }} className='btn btn-success rounded mt-3' to={'/'}>Bck to Home</Link>
        </div>
    }
  </div>
  )
}

export default Cart;
