import { Link } from 'react-router-dom'
import { FiArrowRight, FiTruck, FiShield, FiAward, FiHeadphones } from 'react-icons/fi'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import './Home.css'

const Home = () => {
  const featuredProducts = products.slice(0, 8)

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-title">Elegância e Sofisticação</h1>
              <p className="hero-subtitle">
                Descubra nossa coleção exclusiva de produtos premium selecionados
                especialmente para você
              </p>
              <div className="hero-buttons">
                <Link to="/loja" className="btn btn-primary">
                  Explorar Loja <FiArrowRight />
                </Link>
                <Link to="/sobre" className="btn btn-secondary">
                  Sobre Nós
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200" 
            alt="Fashion Store" 
          />
          <div className="hero-overlay"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FiTruck />
              </div>
              <h3>Entrega Rápida</h3>
              <p>Entregamos em toda cidade de Tete com agilidade e segurança</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FiShield />
              </div>
              <h3>Pagamento Seguro</h3>
              <p>Suas transações protegidas com os melhores sistemas de segurança</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FiAward />
              </div>
              <h3>Qualidade Premium</h3>
              <p>Produtos selecionados com os mais altos padrões de qualidade</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FiHeadphones />
              </div>
              <h3>Suporte 24/7</h3>
              <p>Equipe sempre pronta para atender suas necessidades</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Produtos em Destaque</h2>
          <p className="section-subtitle">
            Seleção especial dos nossos melhores produtos
          </p>
          
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="section-cta">
            <Link to="/loja" className="btn btn-dark">
              Ver Todos os Produtos <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Visite Nossa Loja Física</h2>
            <p>Av. 24 de Julho, Tete - Ao pé do pensão Alves</p>
            <Link to="/contacto" className="btn btn-primary">
              Como Chegar <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
