import React, { useContext } from "react";
import CardCart from "../../components/CardCart/CardCart";
import { CartStateContext } from "../../context/CartContext";
import formatCurrency from '../../Utilities/FormatCurrency';
import CheckOut from "../CheckOut/CheckOut";
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ShoppingCart = () => {
    const { items: cartItems } = useContext(CartStateContext);
    return(
        <>
            {cartItems.map(item => (
                            <Row key={item._id} className="my-3">
                                <CardCart  data={item} />
                            </Row>
                        ))}
            <div className="ms-auto fw-bold fs-5">
                Total{" "}
                {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                    return total + cartItem.price * cartItem.quantity
                }, 0)
                )}
            </div>
            <Button as={Link} to='/checkout' variant="warning" className="w-100 mt-10 p-2" >Pagar</Button>
    
        </>
    )

}

export default ShoppingCart;