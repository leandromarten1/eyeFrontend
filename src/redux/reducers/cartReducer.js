import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  REMOVE_CART,
} from '../actions';

const initialState = JSON.parse(localStorage.getItem('cart')) || {};

export default function cart(state = initialState, { type, payload }) {
  let cartList = { ...state };

  switch (type) {
    case UPDATE_QUANTITY:
      cartList[payload.nome] = { ...payload };
      break;

    case REMOVE_FROM_CART:
      delete cartList[payload.nome];
      break;

    case ADD_TO_CART:
      cartList[payload.nome] = { ...payload };
      break;

    case REMOVE_CART:
      cartList = {};
      break;

    default:
      break;
  }
  localStorage.setItem('cart', JSON.stringify(cartList));
  return cartList;
}
