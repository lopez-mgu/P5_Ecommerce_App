import React, {useContext} from "react";
import { Button, Stack } from "react-bootstrap"
import { AiFillDelete } from "react-icons/ai";
import formatCurrency from '../../Utilities/FormatCurrency';
import { CartDispatchContext, addToCart, removeFromCart } from "../../context/CartContext";
import './CardCart.css'


const CardCart = ({data}) =>{
  const { img_url, img_cart, type, price, _id, description, quantity } = data;
  console.log(data)

  const dispatch = useContext(CartDispatchContext);
  const handleRemove = (productId) => {
    return removeFromCart(dispatch, productId);
    };

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img
            src={img_cart}
            style={{ width: "100px", height: "65px", objectFit: "cover" }}
        />
        <div className="me-auto">
            <div>
            {type}{"  "}
            {quantity > 1 && (
                <span className="text-muted" style={{ fontSize: ".70rem" }}>
                Qty: {quantity}
                </span>
            )}
            </div>
            <div>
            {description.slice(0,15)+"..."}{" "}
            
            </div>
            <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {formatCurrency(price)}
            </div>
        </div>
        <div class="input-group" style={{width: "6.5rem", height: "1.75rem"}}>
            <button className="btn btn-outline-secondary" type="button">+</button>
            <input  type="number" className="form-control input-quantity" placeholder="-" value={quantity} />
            <button className="btn btn-outline-secondary" type="button">-</button>
        </div>
        <div> {formatCurrency(price * quantity)}</div>
        <AiFillDelete 
        fontSize="20px" 
        style={{ cursor: "pointer" }}
        onClick={() => handleRemove(_id)}
        />
        </Stack>
  )
}

export default CardCart;