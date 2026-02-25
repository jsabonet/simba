import { Link } from 'react-router-dom'
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container-wide">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-logo">
                <img src="/images/logo.svg" alt="Sj Simba Store" onError={(e) => e.target.style.display = 'none'} />
                <h3>Sj Simba Store</h3>
              </div>
              <p className="footer-description">
                Sua loja de confiança em Tete, Moçambique. Oferecemos produtos de qualidade
                premium com elegância e sofisticação.
              </p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FiFacebook />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FiInstagram />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FiTwitter />
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Links Rápidos</h4>
              <ul className="footer-links">
                <li><Link to="/">Início</Link></li>
                <li><Link to="/loja">Loja</Link></li>
                <li><Link to="/sobre">Sobre Nós</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Categorias</h4>
              <ul className="footer-links">
                <li><Link to="/loja?categoria=moda-feminina">Moda Feminina</Link></li>
                <li><Link to="/loja?categoria=moda-masculina">Moda Masculina</Link></li>
                <li><Link to="/loja?categoria=acessorios">Acessórios</Link></li>
                <li><Link to="/loja?categoria=calcados">Calçados</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Contacto</h4>
              <ul className="footer-contact">
                <li>
                  <FiMapPin />
                  <div>
                    <strong>Av. 24 de Julho, Tete</strong>
                    <span>Ao pé do pensão Alves</span>
                  </div>
                </li>
                <li>
                  <FiPhone />
                  <span>+258 84 123 4567</span>
                </li>
                <li>
                  <FiMail />
                  <span>info@simbastore.co.mz</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container-wide">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Sj Simba Store. Todos os direitos reservados.</p>
            <div className="footer-bottom-links">
              <a href="#">Política de Privacidade</a>
              <span>•</span>
              <a href="#">Termos de Serviço</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
