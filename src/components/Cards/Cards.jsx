import React, { useState, useContext, useEffect } from "react";
import {Card, Button} from 'react-bootstrap';
import { CartDispatchContext, CartStateContext, addToCart, removeFromCart, removeOneFromCart, getItemQuantity } from "../../context/CartContext";
import formatCurrency from '../../Utilities/FormatCurrency';

const Cards = ({data}) => {
    const [quantity, setQuantity] = useState(0)
    const dispatch = useContext(CartDispatchContext);
    const { items: cartItems } = useContext(CartStateContext);
    const { img_url, type, price, _id, description } = data;
    
    const handleAddToCart = () => {
        const product = { ...data, quantity: 1 };
        addToCart(dispatch, product);
        handleUpdateQuantity();
      };

    const handleUpdateQuantity = () => {
        // const qtyFound = getItemQuantity(dispatch, _id)
        const qtyFound = cartItems.find(item => item._id === _id)?.quantity || 0
        setQuantity(qtyFound);
    }

    const handleRemoveOneFromCart = () => {
        const product = { ...data, quantity: 1 };
        removeOneFromCart(dispatch, product);
        handleUpdateQuantity();
      };

    const handleRemove = (productId) => {
        removeFromCart(dispatch, productId);
        handleUpdateQuantity();
    };

    useEffect(()=>{
        handleUpdateQuantity();
    },[])

    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img_url} height="200px" style={{objectFit: "cover"}}/>
                <Card.Body className='d-flex flex-column'>
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                        <span className="fs-2">{type}</span>
                        <span className="ns-2 text-muted">{formatCurrency(price)}</span>
                    </Card.Title>
                    <Card.Text>{description.slice(0, 100) + '...'}</Card.Text>
                    <div className="mt-auto">
                        {/* <Button className="w-100" onClick={handleAddToCart}>+ Agregar</Button>
                        <Button variant="danger" size="sm" onClick={() => handleRemove(data._id)}>Quitar</Button> */}
                        {quantity === 0 ? (
                            <Button className="w-100" onClick={handleAddToCart}>+ Agregar</Button>
                        ): <div className="d-flex align-items-center justify-content-center flex-column" style={{ gap: "0.5rem"}}>
                                <div className="d-flex align-items-center justify-content-center" style={{ gap: "0.5rem"}}>
                                    <Button onClick={handleRemoveOneFromCart}>-</Button>
                                    <div>
                                        <span className="fs-3">{quantity}</span> en bolsa
                                    </div>
                                    <Button onClick={handleAddToCart}>+</Button>
                                </div>
                                <Button variant="danger" size="sm" onClick={() => handleRemove(data._id)}>Quitar</Button>
                            </div>}
                    </div>
                    
                </Card.Body>
            </Card>
        </>
    );
}

export default Cards;