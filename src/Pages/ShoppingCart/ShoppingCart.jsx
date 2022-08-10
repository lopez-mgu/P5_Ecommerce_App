import React, { useContext } from "react";
import CardCart from "../../components/CardCart/CardCart";
import { CartStateContext } from "../../context/CartContext";
import formatCurrency from '../../Utilities/FormatCurrency';


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
    
        </>
    )

}

export default ShoppingCart;