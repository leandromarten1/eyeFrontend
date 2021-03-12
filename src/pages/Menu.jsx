import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/api';
import { getToken } from '../utils/helpers';

function Menu() {
  const [products, setProducts] = useState([]);
  const token = getToken();

  useEffect(() => {
    getProducts(token).then(({ data }) => setProducts(data));
  }, [token]);

  return (
    <div className='menu'>
      <Header />
      <div className='container'>
        <div className='d-flex flex-row justify-content-between flex-wrap h-100'>
          {products.map((item) => (
            <ProductCard info={item} key={item.id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
