import React, { useState, useEffect, useContext } from 'react';
import Cards from '../../components/Cards/Cards.jsx';
import { Col, Container, Row } from 'react-bootstrap';
import { CartStateContext } from "../../context/CartContext";
import axios from 'axios';

const Store = () => {
  const { items: cartItems} = useContext(CartStateContext);
  const [products, setProducts] = useState([]);
  const localurl = `http://localhost:4000/api/v1/products`;
  const weburl = `https://p5-lopezmgu-ecommerce-backend.herokuapp.com/api/v1/products`;
  console.log(weburl)

  const getProducts = async () => {
    const url = weburl;
    const res = await axios.get(url)
    console.log(res.data)
    setProducts(res.data)
  }

  useEffect(() => {
    getProducts();
  }, []);

    return (
      <>
        <Container>
          <Row className="g-4">
            {
              products.map((info, index) =>{
                const qtyFound = cartItems.find(item => item._id === info._id)?.quantity || 0
                return(
                  <Col key={index} className='d-flex justify-content-center'>
                    <Cards key={info._id} data={info} quantity={qtyFound}/>
                  </Col>
                );
              })
            }
          </Row>
        </Container>
      </>
      
    )
}

export default Store;

