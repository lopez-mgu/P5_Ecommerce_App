import React, { useReducer, createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const initialState = {
  items: []
};

export const CartStateContext = createContext();
export const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const id = action.payload.cartItem._id;
      const isOld = state.items.map((item) => item._id).includes(id);
      let cartItems = null;
      if (isOld) {
        const items = state.items.map((item) => {
          if (item._id === id) {
            return {
              ...item,
              quantity: item.quantity + 1
            };
          }
          return item;
        });
        cartItems = [...items];
      } else {
        cartItems = [...state.items, action.payload.cartItem];
      }
      return {
        ...state,
        items: cartItems
      };
      case "REMOVE_ONE_FROM_CART":
        const idr = action.payload.cartItem._id;
        const itemQty = state.items.find(item => item._id === idr).quantity
        console.log('testing', itemQty)
        let cartItemsr = null;
        if (itemQty > 1){
          const items = state.items.map((item) => {
            if (item._id === idr) {
              return {
                ...item,
                quantity: item.quantity - 1
              };
            }
          });
          cartItemsr = [...items];
     
        } else {
          cartItemsr = state.items.filter(
            (item) => item._id !== action.payload.cartItem._id
          )
        }
        return {
          ...state,
          items: cartItemsr
        };
        
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(
          (item) => item._id !== action.payload.cartItemId
        )
      };
    case "CLEAR_CART":
      return {
        ...state,
        ...initialState
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const addToCart = (dispatch, cartItem) => {
  return dispatch({
    type: "ADD_TO_CART",
    payload: {
      cartItem: cartItem
    }
  });
};

export const removeOneFromCart = (dispatch, cartItem) => {
  return dispatch({
    type: "REMOVE_ONE_FROM_CART",
    payload: {
      cartItem: cartItem
    }
  });
};

export const removeFromCart = (dispatch, cartItemId) => {
  return dispatch({
    type: "REMOVE_FROM_CART",
    payload: {
      cartItemId: cartItemId
    }
  });
};

export const clearCart = (dispatch) => {
  return dispatch({
    type: "CLEAR_CART"
  });
};

const CartProvider = ({ children }) => {
  const [persistedCartItems, setPersistedCartItems] = useLocalStorage(
    "cartItems",
    []
  );
  const persistedCartState = {
    isCartOpen: false,
    items: persistedCartItems || []
  };
  const [state, dispatch] = useReducer(reducer, persistedCartState);
  useEffect(() => {
    setPersistedCartItems(state.items);
  }, [JSON.stringify(state.items)]);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export default CartProvider;