import { createContext, useContext, useReducer } from "react";

export const shoppingCartContext = createContext();
export const useShoppingCart = () => useContext(shoppingCartContext);

const ADD_TO_CART_ACTION = "ADD_TO_CART";
const REMOVE_FROM_CART_ACTION = "REMOVE_FROM_CART";

const sortCartItems = (shoppingCartArray) => {
  const sorted = shoppingCartArray.sort(function (x, y) {
    return y.timestamp - x.timestamp;
  });

  return sorted;
};

const addToCartActionCreator = ({ id, title, price, image }) => {
  return {
    type: ADD_TO_CART_ACTION,
    payload: {
      id,
      title,
      price,
      image,
    },
  };
};

const removeToCartActionCreator = (itemId) => {
  return {
    type: REMOVE_FROM_CART_ACTION,
    payload: {
      id: itemId,
    },
  };
};

const reducer = (oldState, action) => {
  if (action.type === ADD_TO_CART_ACTION) {
    const {
      payload: { id, title, price, image },
    } = action;

    const itemFound = oldState.find((item) => item.id === action.payload.id);

    if (itemFound) {
      return sortCartItems([
        ...oldState.filter((item) => item.id !== action.payload.id),
        {
          ...itemFound,
          quantity: itemFound.quantity + 1,
        },
      ]);
    }

    return sortCartItems([
      ...oldState,
      {
        id,
        title,
        price,
        image,
        quantity: 1,
        timestamp: Date.now(),
      },
    ]);
  }

  if (action.type === REMOVE_FROM_CART_ACTION) {
    const itemFound = oldState.find((item) => item.id === action.payload.id);

    if (itemFound) {
      if (itemFound.quantity === 1) {
        return sortCartItems(
          oldState.filter((item) => item.id !== action.payload.id)
        );
      }

      return sortCartItems([
        ...oldState.filter((item) => item.id !== action.payload.id),
        {
          ...itemFound,
          quantity: itemFound.quantity - 1,
        },
      ]);
    }
  }
};

export const ShoppingCartContextProvider = (props) => {
  const { children } = props;

  const [shoppingCart, dispatch] = useReducer(reducer, []);

  const addItemToCart = ({ id, title, price, image }) => {
    dispatch(
      addToCartActionCreator({
        id,
        title,
        price,
        image,
      })
    );
  };

  const removeFromCart = (id) => {
    dispatch(removeToCartActionCreator(id));
  };

  return (
    <shoppingCartContext.Provider
      value={{ shoppingCart, addItemToCart, removeFromCart }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
};
