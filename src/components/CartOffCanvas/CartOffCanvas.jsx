import React, { useRef, useContext } from 'react';
import { Offcanvas, Stack } from "react-bootstrap";
import formatCurrency from '../../Utilities/FormatCurrency';
import {
    CartStateContext,
    CartDispatchContext,
    toggleCartPopup
  } from "../../context/CartContext";
import CardOffCanvas from '../CardOffCanvas/CardOffCanvas';


const CartOffCanvas = ({show}) => {
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
        </Offcanvas.Body>
        </Offcanvas>
    )
}

export default CartOffCanvas;
