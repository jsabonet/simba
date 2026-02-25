import { Link, useLocation } from 'react-router-dom'
import { FiShoppingBag, FiMenu, FiX, FiSearch, FiUser } from 'react-icons/fi'
import { useCart } from '../context/CartContext'
import { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { getCartCount } = useCart()
  const location = useLocation()
  const cartCount = getCartCount()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/loja', label: 'Loja' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/contacto', label: 'Contacto' }
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-wide">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/images/logo.svg" alt="Sj Simba Store" className="logo-image" onError={(e) => e.target.style.display = 'none'} />
            <span className="logo-text">Sj Simba Store</span>
          </Link>

          <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <button className="icon-button" aria-label="Pesquisar">
              <FiSearch />
            </button>
            <button className="icon-button user-button" aria-label="Perfil">
              <FiUser />
            </button>
            <Link to="/carrinho" className="icon-button cart-button">
              <FiShoppingBag />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
            <button
              className="mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
