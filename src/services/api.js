import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const apiLogin = async (email, password) =>
  axios.post(`${BASE_URL}/login`, { email, password });

export const getProducts = async (token) =>
  axios.get(`${BASE_URL}/cardapio`, { headers: { authorization: token } });

export const getProductById = async (token, id) =>
  axios.get(`${BASE_URL}/cardapio/${id}`, { headers: { authorization: token } });

export const addSale = async (
  name,
  email,
  address,
  state,
  city,
  payment,
  products,
  token,
) =>
  axios.post(
    `${BASE_URL}/checkout`,
    { name, email, address, state, city, payment, products },
    { headers: { authorization: token } },
  );
