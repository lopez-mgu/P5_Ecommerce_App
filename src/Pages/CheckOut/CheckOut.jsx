import React, {useContext} from 'react';
import BtnCheckOut from './BtnCheckOut';
import { CartStateContext } from "../../context/CartContext";
import './CheckOut.css';

const CheckOut = () => {
    const currency = "USD";
    const { items: cartItems } = useContext(CartStateContext);

    const totalAmount = cartItems.reduce((total, cartItem) => {return total + cartItem.price * cartItem.quantity},0)

    return (
      <div className="phanton">
        <div className="checkout-container mx-auto">
          <div className='mx-auto'>
              <h1 className='my-5'>Selecciona el método de pago:</h1>
              <BtnCheckOut
              currency={currency}
              showSpinner={false}
              amount={totalAmount}
              />
          </div>
        </div>
      </div>
  )
}

export default CheckOut;
