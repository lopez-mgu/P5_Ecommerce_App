import React, { useState, useRef, useContext } from 'react';
import { AiFillDelete } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import { Overlay, Popover, Stack } from 'react-bootstrap';
// import Overlay from 'react-bootstrap/Overlay';
// import Popover from 'react-bootstrap/Popover';
import formatCurrency from '../../Utilities/FormatCurrency';
import {
    CartStateContext,
    CartDispatchContext,
    toggleCartPopup
  } from "../../context/CartContext";

const CartPopOver = ({show, target}) => {
//   const [show, setShow] = useState(false);
//   const [target, setTarget] = useState(null);
    const { items: cartItems, isCartOpen } = useContext(CartStateContext);
    console.log(cartItems)
    const ref = useRef(null);

//   const handlePopOverClick = (event) => {
//     console.log('entro')
//     setShow(!show);
//     setTarget(event.target);
//   };

    return (
        <div ref={ref}>
        {/* <Button onClick={handlePopOverClick}>Holy guacamole!</Button> */}

        <Overlay
            show={show}
            target={target}
            placement='left'
            container={ref}
            containerPadding={20}
        >
            <Popover id="popover-contained" class="mw-100" style={{width: "600px"}}>
                {/* <Popover.Header as="h3">Popover bottom</Popover.Header> */}
                <Popover.Body>
                    {cartItems.map((data) =>{
                        const { img_url, img_cart, type, price, _id, description } = data;
                        console.log(img_cart)
                        return(
                            // <div key={index}>
                            //     <h5>{info.type}</h5>
                            //     <span>{info.price}</span>
                            // </div>
                            <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
                                {/* <span className="cartitem" key={_id}> */}
                                <img src={img_cart} className="cartItemImg" height="40px" width="40px" style={{objectFit: "cover"}} alt=""/>
                                <div className="cartItemDetail">
                                    <span>{description.slice(0, 15)+'...'}</span>
                                    <span>{formatCurrency(price)}</span>
                                </div>
                                <AiFillDelete
                                fontSize="20px"
                                style={{ cursor: "pointer" }}
                                />
                                {/* </span>      */}
                            </Stack>
                            
                        )
                        
                    })}
                </Popover.Body>
            </Popover>
        </Overlay>
        </div>
    );
}

export default CartPopOver;


    // <Dropdown className="d-inline mx-2" autoClose="outside">
    //     <Dropdown.Toggle id="dropdown-autoclose-outside">
    //       Clickable Inside
    //     </Dropdown.Toggle>

    //     <Dropdown.Menu>
    //       <Dropdown.Item href="#">Menu Item</Dropdown.Item>
    //       <Dropdown.Item href="#">Menu Item</Dropdown.Item>
    //       <Dropdown.Item href="#">Menu Item</Dropdown.Item>
    //     </Dropdown.Menu>
    // </Dropdown>
