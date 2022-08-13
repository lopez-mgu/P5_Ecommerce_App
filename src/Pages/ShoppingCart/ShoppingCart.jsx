import React, { useContext } from "react";
import CardCart from "../../components/CardCart/CardCart";
import { CartStateContext } from "../../context/CartContext";
import formatCurrency from '../../Utilities/FormatCurrency';
import CheckOut from "../CheckOut/CheckOut";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ShoppingCart = () => {
    const { items: cartItems } = useContext(CartStateContext);
    return(
        <>
            {cartItems.map(item => (
                            <CardCart key={item._id} data={item} />
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