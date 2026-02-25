import { Link } from 'react-router-dom'
import { FiMinus, FiPlus, FiX, FiShoppingBag } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import './Cart.css'

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <div className="container">
          <FiShoppingBag className="empty-cart-icon" />
          <h2>Seu carrinho está vazio</h2>
          <p>Adicione produtos ao seu carrinho para continuar comprando</p>
          <Link to="/loja" className="btn btn-primary">
            Ir às Compras
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <div className="container">
          <h1>Carrinho de Compras</h1>
          <p>{cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'} no carrinho</p>
        </div>
      </div>

      <div className="container">
        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <Link to={`/produto/${item.id}`} className="item-image">
                  <img src={item.image} alt={item.name} />
                </Link>

                <div className="item-details">
                  <Link to={`/produto/${item.id}`} className="item-name">
                    {item.name}
                  </Link>
                  <span className="item-category">{item.category}</span>
                  <span className="item-price-mobile">
                    {item.price.toLocaleString('pt-MZ')} MT
                  </span>
                </div>

                <div className="item-quantity">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    aria-label="Diminuir quantidade"
                  >
                    <FiMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    aria-label="Aumentar quantidade"
                  >
                    <FiPlus />
                  </button>
                </div>

                <div className="item-price">
                  {item.price.toLocaleString('pt-MZ')} MT
                </div>

                <div className="item-subtotal">
                  {(item.price * item.quantity).toLocaleString('pt-MZ')} MT
                </div>

                <button
                  className="item-remove"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remover item"
                >
                  <FiX />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Resumo do Pedido</h3>
            
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

            <Link to="/checkout" className="btn btn-primary checkout-btn">
              Finalizar Compra
            </Link>

            <Link to="/loja" className="continue-shopping">
              Continuar Comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
