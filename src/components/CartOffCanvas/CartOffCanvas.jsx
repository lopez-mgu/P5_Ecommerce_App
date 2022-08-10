import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { Offcanvas, Stack, Button } from "react-bootstrap";
import formatCurrency from '../../Utilities/FormatCurrency';
import { CartStateContext } from "../../context/CartContext";
import CardOffCanvas from '../CardOffCanvas/CardOffCanvas';


const CartOffCanvas = ({show, quantity}) => {
    console.log('entre CartOffCanvas', show)
    const { items: cartItems } = useContext(CartStateContext);
    return (
        <Offcanvas 
        show={show} 
        onHide={null} 
        placement="start"
        style={{width: "500px"}}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            { quantity === 0? (
                <span>Tu carrito está vacío...</span>
            )
            :<>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CardOffCanvas key={item._id} data={item} />
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total{" "}
                        {formatCurrency(
                        cartItems.reduce((total, cartItem) => {
                            return total + cartItem.price * cartItem.quantity
                        }, 0)
                        )}
                    </div>
                </Stack>
                <Button as={Link} to='/shopping-cart' variant="warning" className="w-100 mt-10 p-2" >CheckOut</Button>
            </>
            }
            
        </Offcanvas.Body>
        </Offcanvas>
    )
}

export default CartOffCanvas;
