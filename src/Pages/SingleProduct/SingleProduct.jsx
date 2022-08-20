import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import formatCurrency from '../../Utilities/FormatCurrency';
import { CartStateContext, CartDispatchContext, addToCart, removeFromCart, removeOneFromCart } from "../../context/CartContext";
import {Button} from 'react-bootstrap';

const SingleProduct = () => {

    const dispatch = useContext(CartDispatchContext);
    const { storeId } = useParams({});
    const { items: cartItems } = useContext(CartStateContext);

    const [data, setData] = useState([]);
    const { img_cart, img_url, type, price, _id, description } = data;
    const cartQuantity = cartItems.filter((item) => item._id === storeId);
    const quantity = cartQuantity.length ? cartQuantity[0].quantity : 0;

    const [dinImg, setDinImg] = useState(img_url);
    console.log(img_url, dinImg)

    const getProducts = async (Id) => {
        const url = `https://p5-lopezmgu-ecommerce-backend.herokuapp.com/api/v1/products/${Id}`;
        const res = await axios.get(url)
        // console.log(res.data)
        setData(res.data)
    }

    const change_image = (image) => {
        setDinImg(image)
        console.log(image)
    }

    const handleAddToCart = () => {
        const product = { ...data, quantity: 1 };
        addToCart(dispatch, product);
      };

    const handleRemoveOneFromCart = () => {
        const product = { ...data, quantity: 1 };
        removeOneFromCart(dispatch, product);
      };

    const handleRemove = (productId) => {
        removeFromCart(dispatch, productId);
    };

  useEffect(() => {
    getProducts(storeId);
  }, []);

  return (
            <div class="container mt-5 mb-5">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-10">
                        <div class="card">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="images p-3">
                                        <div class="text-center p-4"> <img id="main-image" src={dinImg===undefined?img_url:dinImg} width="250" /> </div>
                                        <div class="thumbnail text-center"> <img onClick={() => change_image(img_cart)} src={img_cart} width="70" /> <img onClick={() => change_image(img_url)} src={img_url} width="70" /> </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="product p-4">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="d-flex align-items-center"> <i class="fa fa-long-arrow-left"></i> <span class="ml-1">Regresar</span> </div> <i class="fa fa-shopping-cart text-muted"></i>
                                        </div>
                                        <div class="mt-4 mb-3"> <span class="text-uppercase text-muted brand">{type}</span>
                                            <div class="price d-flex flex-row align-items-center"> <span class="act-price">{formatCurrency(price)}</span>
                                            </div>
                                        </div>
                                        <p class="about">{description}</p>
                                        <div className="mt-auto">
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
                                                    <Button variant="danger" size="sm" onClick={() => handleRemove(_id)}>Quitar</Button>
                                                </div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default SingleProduct