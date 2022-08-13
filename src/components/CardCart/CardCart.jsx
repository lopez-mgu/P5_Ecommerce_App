import React, {useContext} from "react";
import { OverlayTrigger, Tooltip, Col, Container, Stack } from "react-bootstrap"
import { AiFillDelete } from "react-icons/ai";
import formatCurrency from '../../Utilities/FormatCurrency';
import { CartDispatchContext, addToCart, removeFromCart, removeOneFromCart } from "../../context/CartContext";
import './CardCart.css'


const CardCart = ({data}) =>{
  // const { img_url, img_cart, type, price, _id, description, quantity } = data;
  const dispatch = useContext(CartDispatchContext);

  const { quantity, ...restofData } = data;
  const { img_url, img_cart, type, price, _id, description } = restofData
  
  // console.log('data-qty', data)
  // console.log('rest-data', restofData)
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {type}{"  "}
    </Tooltip>
  );
  
  
  const handleAddToCart = () => {
    const product = { ...restofData, quantity: 1 };
    addToCart(dispatch, product);
  };

  const handleRemoveOneFromCart = () => {
      const product = { ...restofData, quantity: 1 };
      console.log('restofData', restofData)
      removeOneFromCart(dispatch, product);
    };

  const handleRemove = (productId) => {
      removeFromCart(dispatch, productId);
  };

  return (
    // <Stack direction="horizontal" gap={2} className="d-flex align-items-center my-4">
      <>
        <Col className="d-flex flex-row justify-content-end align-items-center" xs={5}>
          <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
            <img
                src={img_cart}
                style={{ width: "8.5rem", height: "5rem", objectFit: "cover" }}
            />
          </OverlayTrigger>
          <div>
              {/* <div>
              {type}{"  "}
              </div> */}
              {/* {quantity > 1 && (
                  <span className="text-muted" style={{ fontSize: ".70rem" }}>
                  Qty: {quantity}
                  </span>
              )} */}
              <div>
              {description.slice(0,10)+"..."}{" "}
              </div>
              <div className="text-muted" style={{ fontSize: ".75rem" }}>
              {formatCurrency(price)}
              </div>
          </div>
        </Col>
        <Col className="d-flex flex-row justify-content-end align-items-center">
            <div className="input-group d-flex mx-1" style={{width: "7rem", height: "1.75rem"}}>
                <button className="btn btn-outline-secondary" type="button" onClick={handleAddToCart}>+</button>
                <input  type="number" className="form-control input-quantities text-center" placeholder="-" value={quantity} />
                <button className="btn btn-outline-secondary" type="button" onClick={handleRemoveOneFromCart}>-</button>
            </div>
        </Col>
        <Col className="d-flex flex-row justify-content-end align-items-center">
          <div className="mx-1">{formatCurrency(price * quantity)}</div>
            <AiFillDelete 
            fontSize="20px" 
            style={{ cursor: "pointer" }}
            onClick={() => handleRemove(_id)}
            />
        </Col>

        {/* <Container className="d-flex flex-row justify-content-center align-items-center">


        </Container> */}
      </>
        
        // </Stack>
  )
}

export default CardCart;