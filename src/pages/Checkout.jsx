import React, { useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { addSale } from '../services/api';
import { getToken } from '../utils/helpers';
import { removeAllCart } from '../redux/actions';

function Checkout() {
  const carrinho = useSelector((state) => state.cart);
  const produtos = Object.values(carrinho);
  const token = getToken();
  const history = useHistory();
  const dispatch = useDispatch();
  const [form, setForm] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: '',
      email: '',
      address: '',
      city: '',
      state: '',
      payment: 'credito',
    },
  );

  const handleForm = ({ target: { name, value } }) => {
    setForm({ [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(removeAllCart());
    history.push('/');
    const { name, email, address, city, state, payment } = form;
    await addSale(name, email, address, state, city, payment, produtos, token);
  };

  return (
    <div>
      {produtos.length < 1 ? (
        <div className='checkout'>
        <Header />
        <div className="container">
          <h5 className="text-center">Sem pedidos no carrinho</h5>
          <Link to="/cardapio" className="btn btn-md btn-secondary w-100">ir para cardapio</Link>
        </div>
        <Footer />
        </div>
      ) : (
        <div className='checkout'>
          <Header />
          <div className='container'>
            <form onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-sm-12'>
                  <h3>Finalizar o pedido</h3>
                  <hr />
                  <h5>Dados Pessoais</h5>
                  <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input
                      type='text'
                      className='form-control'
                      name='name'
                      placeholder='Your name'
                      onChange={handleForm}
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                      type='email'
                      className='form-control'
                      name='email'
                      placeholder='Your Email'
                      onChange={handleForm}
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='address'>Address</label>
                    <input
                      type='text'
                      className='form-control'
                      name='address'
                      placeholder='Your Address'
                      onChange={handleForm}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label htmlFor='city'>City</label>
                    <input
                      type='text'
                      className='form-control'
                      name='city'
                      placeholder='Your City'
                      onChange={handleForm}
                      required
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label htmlFor='state'>State</label>
                    <input
                      type='text'
                      className='form-control'
                      name='state'
                      placeholder='Your State'
                      onChange={handleForm}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <h5>Pagamento</h5>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='payment'
                      value='credito'
                      onChange={handleForm}
                      checked={form.payment === 'credito'}
                    />
                    <label className='form-check-label' htmlFor='credito'>
                      Credito
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='payment'
                      value='debito'
                      checked={form.payment === 'debito'}
                      onChange={handleForm}
                    />
                    <label className='form-check-label' htmlFor='debito'>
                      Débito
                    </label>
                  </div>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='payment'
                      value='boleto'
                      checked={form.payment === 'boleto'}
                      onChange={handleForm}
                    />
                    <label className='form-check-label' htmlFor='boleto'>
                      Boleto
                    </label>
                  </div>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col-md-12'>
                  <button
                    type='submit'
                    className='btn btn-md btn-primary w-100'
                  >
                    Finalizar pedido
                  </button>
                </div>
              </div>
            </form>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Checkout;
