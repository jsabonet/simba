import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FiFilter, FiX } from 'react-icons/fi'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'
import './Shop.css'

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('categoria') || 'todos')
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = products.filter(product => {
    if (selectedCategory === 'todos') return true
    return product.category.toLowerCase().replace(' ', '-') === selectedCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'name':
        return a.name.localeCompare(b.name)
      case 'rating':
        return b.rating - a.rating
      default:
        return 0
    }
  })

  useEffect(() => {
    const category = searchParams.get('categoria')
    if (category) {
      setSelectedCategory(category)
    }
  }, [searchParams])

  const handleCategoryChange = (slug) => {
    setSelectedCategory(slug)
    if (slug === 'todos') {
      setSearchParams({})
    } else {
      setSearchParams({ categoria: slug })
    }
  }

  return (
    <div className="shop">
      <div className="shop-header">
        <div className="container">
          <h1>Nossa Loja</h1>
          <p>Explore nossa coleção completa de produtos premium</p>
        </div>
      </div>

      <div className="container">
        <div className="shop-container">
          {/* Sidebar */}
          <aside className={`shop-sidebar ${showFilters ? 'mobile-open' : ''}`}>
            <div className="sidebar-header">
              <h3>Filtros</h3>
              <button
                className="mobile-close-filters"
                onClick={() => setShowFilters(false)}
              >
                <FiX />
              </button>
            </div>

            <div className="filter-section">
              <h4>Categorias</h4>
              <div className="category-list">
                {categories.map(category => (
                  <button
                    key={category.slug}
                    className={`category-item ${selectedCategory === category.slug ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(category.slug)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="shop-main">
            <div className="shop-toolbar">
              <div className="results-info">
                <span>{sortedProducts.length} produtos encontrados</span>
              </div>
              
              <div className="toolbar-actions">
                <button
                  className="mobile-filters-button"
                  onClick={() => setShowFilters(true)}
                >
                  <FiFilter /> Filtros
                </button>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="featured">Em Destaque</option>
                  <option value="name">Nome (A-Z)</option>
                  <option value="price-low">Preço: Menor para Maior</option>
                  <option value="price-high">Preço: Maior para Menor</option>
                  <option value="rating">Melhor Avaliação</option>
                </select>
              </div>
            </div>

            <div className="products-grid">
              {sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="no-products">
                <p>Nenhum produto encontrado nesta categoria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
