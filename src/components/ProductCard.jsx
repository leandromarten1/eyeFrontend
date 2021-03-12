import React from 'react';
import { Link } from 'react-router-dom';

const convertCurrency = (price) => {
  return price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
};

function ProductCard(props) {
  const { id, imagem, nome, preco } = props.info;
  return (
    <Link to={`/cardapio/${id}`}>
      <div className='card d-flex mb-4 mx-2' style={{ width: '150px' }}>
        <img
          className='card-img-top'
          src={imagem}
          width={130}
          height={140}
          alt={nome}
        />
        <div className='card-body p-2 text-center'>
          <h5 className='card-title'>{nome}</h5>
          <p className='card-text'>{convertCurrency(preco)}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
