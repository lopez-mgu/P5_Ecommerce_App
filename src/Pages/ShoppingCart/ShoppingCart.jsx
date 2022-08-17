import React, { useContext, useEffect } from "react";
import CardCart from "../../components/CardCart/CardCart";
import { CartStateContext } from "../../context/CartContext";
import formatCurrency from '../../Utilities/FormatCurrency';
import CheckOut from "../CheckOut/CheckOut";
import { Button, Row, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ShoppingCart.css'


const ShoppingCart = () => {
    const navigate = useNavigate();
    const { items: cartItems } = useContext(CartStateContext);
    let cartQuantity = 0
    cartItems.forEach(item => {cartQuantity += item.quantity});

    const cartEmpty = cartQuantity === 0? true : false;
    
    useEffect(() => {
        if (cartEmpty) {
            navigate('/store', { replace: true })
        }
      }, [!cartEmpty])

    console.log('test', cartEmpty)
    return(
        <>  
            {cartQuantity === 0? (
            <div className="phanton">
                <div className="shopping-cart-container">
                Carrito vacio, redireccionando a tienda...
                </div>
            </div>
            ):
            <div className="phanton">
                <div className="shopping-cart-container">
                    <div className="main">
                        <Container fluid>
                            {cartItems.map(item => (
                                            <Row key={item._id} className="d-flex align-items-center my-3 justify-content-center">
                                                <CardCart  data={item} />
                                            </Row>
                                        ))}
                        </Container>
                        <div className="ms-auto fw-bold fs-5">
                            Total{" "}
                            {formatCurrency(
                            cartItems.reduce((total, cartItem) => {
                                return total + cartItem.price * cartItem.quantity
                            }, 0)
                            )}
                        </div>
                        <Button as={Link} to='/checkout' variant="warning" className="w-100 mt-10 p-2" >Pagar</Button>
                    </div>
                </div>
            </div>
            }
    
        </>
    )

}

export default ShoppingCart;