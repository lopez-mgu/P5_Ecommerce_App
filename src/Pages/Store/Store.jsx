import React, { useState, useEffect } from 'react';
import Cards from '../../components/Cards/Cards.jsx';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

//http://localhost:4000/api/v1/products
const Store = () => {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const url = 'http://localhost:4000/api/v1/products';
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
                return(
                  <Col key={index} className='d-flex justify-content-center'>
                    <Cards key={info._id} data={info}/>
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

