import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { FiShoppingCart, FiHeart, FiMinus, FiPlus, FiStar, FiCheck, FiArrowLeft } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import './ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')

  const product = products.find(p => p.id === parseInt(id))
  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4)

  if (!product) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>Produto não encontrado</h2>
        <Link to="/loja" className="btn btn-primary" style={{ marginTop: '20px' }}>
          Voltar à Loja
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
    navigate('/carrinho')
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="product-detail">
      <div className="container">
        <Link to="/loja" className="back-button">
          <FiArrowLeft /> Voltar à Loja
        </Link>

        <div className="product-detail-grid">
          <div className="product-image-section">
            <div className="main-image">
              <img src={product.image} alt={product.name} />
              {discount > 0 && <span className="discount-badge">-{discount}%</span>}
            </div>
          </div>

          <div className="product-info-section">
            <div className="breadcrumb">
              <Link to="/">Início</Link> / <Link to="/loja">Loja</Link> / <span>{product.name}</span>
            </div>

            <h1 className="product-title">{product.name}</h1>
            
            <div className="product-rating-detail">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
                  />
                ))}
              </div>
              <span className="rating-text">
                {product.rating} ({product.reviews} avaliações)
              </span>
            </div>

            <div className="product-price-detail">
              <span className="current-price">{product.price.toLocaleString('pt-MZ')} MT</span>
              {product.originalPrice && (
                <span className="original-price">{product.originalPrice.toLocaleString('pt-MZ')} MT</span>
              )}
            </div>

            <p className="product-description-short">{product.description}</p>

            <div className="product-features">
              {product.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <FiCheck /> <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="product-actions">
              <div className="quantity-selector">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Diminuir quantidade"
                >
                  <FiMinus />
                </button>
                <span className="quantity">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Aumentar quantidade"
                >
                  <FiPlus />
                </button>
              </div>

              <button onClick={handleAddToCart} className="btn btn-primary add-to-cart-btn">
                <FiShoppingCart /> Adicionar ao Carrinho
              </button>

              <button className="btn-wishlist">
                <FiHeart />
              </button>
            </div>

            <div className="product-meta">
              <div className="meta-item">
                <span className="meta-label">Categoria:</span>
                <span className="meta-value">{product.category}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Disponibilidade:</span>
                <span className="meta-value stock-status">
                  {product.inStock ? 'Em Estoque' : 'Esgotado'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="product-tabs">
          <div className="tabs-header">
            <button
              className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Descrição
            </button>
            <button
              className={`tab-button ${activeTab === 'info' ? 'active' : ''}`}
              onClick={() => setActiveTab('info')}
            >
              Informações Adicionais
            </button>
            <button
              className={`tab-button ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Avaliações ({product.reviews})
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === 'description' && (
              <div className="tab-pane">
                <h3>Sobre este Produto</h3>
                <p>{product.description}</p>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'info' && (
              <div className="tab-pane">
                <h3>Informações do Produto</h3>
                <table className="info-table">
                  <tbody>
                    <tr>
                      <td>Categoria</td>
                      <td>{product.category}</td>
                    </tr>
                    <tr>
                      <td>Em Estoque</td>
                      <td>{product.inStock ? 'Sim' : 'Não'}</td>
                    </tr>
                    <tr>
                      <td>Avaliação</td>
                      <td>{product.rating} de 5 estrelas</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="tab-pane">
                <h3>Avaliações dos Clientes</h3>
                <p>Nenhuma avaliação ainda. Seja o primeiro a avaliar este produto!</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="related-products">
            <h2 className="section-title">Produtos Relacionados</h2>
            <div className="products-grid">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetail
