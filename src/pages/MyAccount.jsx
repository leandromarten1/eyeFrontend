import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyAccount() {
  const history = useHistory();
  const {
    data: { userData },
  } = JSON.parse(localStorage.getItem('userToken'));

  const logout = () => {
    history.push('/')
    console.log('clique');
    localStorage.removeItem('userToken');
  };

  return (
    <div className='my-account'>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 text-center'>
            <h4>Minha Conta</h4>
            <h5>
              Você está logado como: <strong>{userData.nome}</strong>
            </h5>
            <button
              type='button'
              className='btn btn-md btn-danger w-100'
              onClick={() => logout()}
            >
              Sair
            </button>
          </div>
        </div>
      </div>
      {console.log(userData)}
      <Footer />
    </div>
  );
}

export default MyAccount;
