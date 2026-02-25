import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiCheck } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import './Checkout.css'

const Checkout = () => {
  const navigate = useNavigate()
  const { cartItems, getCartTotal, clearCart } = useCart()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Tete',
    notes: '',
    paymentMethod: 'cash'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você adicionaria a lógica para processar o pedido
    alert('Pedido realizado com sucesso! Entraremos em contacto em breve.')
    clearCart()
    navigate('/')
  }

  if (cartItems.length === 0) {
    navigate('/carrinho')
    return null
  }

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="container">
          <h1>Finalizar Compra</h1>
          <p>Complete seus dados para finalizar o pedido</p>
        </div>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit} className="checkout-container">
          <div className="checkout-form">
            <div className="form-section">
              <h2>Informações Pessoais</h2>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">Primeiro Nome *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Último Nome *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Telefone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+258"
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>Endereço de Entrega</h2>
              
              <div className="form-group">
                <label htmlFor="address">Endereço Completo *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Rua, número, bairro"
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">Cidade *</label>
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                >
                  <option value="Tete">Tete</option>
                  <option value="Moatize">Moatize</option>
                  <option value="Changara">Changara</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="notes">Notas do Pedido (Opcional)</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Adicione instruções especiais para a entrega"
                ></textarea>
              </div>
            </div>

            <div className="form-section">
              <h2>Método de Pagamento</h2>
              
              <div className="payment-methods">
                <label className="payment-method">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={formData.paymentMethod === 'cash'}
                    onChange={handleChange}
                  />
                  <div className="payment-content">
                    <strong>Pagamento na Entrega</strong>
                    <span>Pague em dinheiro quando receber seu pedido</span>
                  </div>
                </label>

                <label className="payment-method">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mpesa"
                    checked={formData.paymentMethod === 'mpesa'}
                    onChange={handleChange}
                  />
                  <div className="payment-content">
                    <strong>M-Pesa</strong>
                    <span>Pagamento via M-Pesa</span>
                  </div>
                </label>

                <label className="payment-method">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={formData.paymentMethod === 'bank'}
                    onChange={handleChange}
                  />
                  <div className="payment-content">
                    <strong>Transferência Bancária</strong>
                    <span>Transferência bancária direta</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className="checkout-summary">
            <h3>Resumo do Pedido</h3>
            
            <div className="summary-items">
              {cartItems.map(item => (
                <div key={item.id} className="summary-item">
                  <img src={item.image} alt={item.name} />
                  <div className="summary-item-info">
                    <span className="summary-item-name">{item.name}</span>
                    <span className="summary-item-qty">Qtd: {item.quantity}</span>
                  </div>
                  <span className="summary-item-price">
                    {(item.price * item.quantity).toLocaleString('pt-MZ')} MT
                  </span>
                </div>
              ))}
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>{getCartTotal().toLocaleString('pt-MZ')} MT</span>
            </div>

            <div className="summary-row">
              <span>Entrega</span>
              <span>Grátis</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row summary-total">
              <span>Total</span>
              <span>{getCartTotal().toLocaleString('pt-MZ')} MT</span>
            </div>

            <button type="submit" className="btn btn-primary submit-order-btn">
              <FiCheck /> Confirmar Pedido
            </button>

            <div className="checkout-info">
              <p>
                <FiCheck /> Seus dados estão seguros
              </p>
              <p>
                <FiCheck /> Entrega grátis em Tete
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Checkout
