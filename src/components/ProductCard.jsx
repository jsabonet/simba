import { Link } from 'react-router-dom'
import { FiShoppingCart, FiHeart, FiEye, FiStar } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product)
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <Link to={`/produto/${product.id}`} className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
        {discount > 0 && <span className="discount-badge">-{discount}%</span>}
        <div className="product-overlay">
          <button
            className="overlay-button"
            onClick={handleAddToCart}
            aria-label="Adicionar ao carrinho"
          >
            <FiShoppingCart />
          </button>
          <button className="overlay-button" aria-label="Adicionar aos favoritos">
            <FiHeart />
          </button>
          <div className="overlay-button view-button">
            <FiEye />
          </div>
        </div>
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <FiStar
              key={i}
              className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
            />
          ))}
          <span className="rating-count">({product.reviews})</span>
        </div>

        <div className="product-price">
          <span className="current-price">{product.price.toLocaleString('pt-MZ')} MT</span>
          {product.originalPrice && (
            <span className="original-price">{product.originalPrice.toLocaleString('pt-MZ')} MT</span>
          )}
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
