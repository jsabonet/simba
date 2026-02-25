import { FiAward, FiHeart, FiShield, FiUsers } from 'react-icons/fi'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>Sobre a Sj Simba Store</h1>
          <p>Elegância, Qualidade e Confiança desde o primeiro dia</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Nossa História</h2>
              <p>
                A Sj Simba Store nasceu com um propósito claro: trazer elegância e sofisticação
                para os moradores de Tete e região. Desde nossa fundação, temos nos dedicado
                a oferecer produtos de alta qualidade que atendem aos padrões internacionais.
              </p>
              <p>
                Localizada na Av. 24 de Julho, ao pé do pensão Alves, nossa loja física é
                um espaço acolhedor onde você pode experimentar nossos produtos e receber
                atendimento personalizado de nossa equipe especializada.
              </p>
              <p>
                Acreditamos que cada cliente merece o melhor, e é por isso que selecionamos
                cuidadosamente cada item do nosso catálogo, garantindo qualidade, estilo e
                durabilidade em todos os produtos que oferecemos.
              </p>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800" 
                alt="Sj Simba Store"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Nossos Valores</h2>
          <p className="section-subtitle">
            Os pilares que fundamentam nosso negócio
          </p>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <FiAward />
              </div>
              <h3>Qualidade Premium</h3>
              <p>
                Selecionamos apenas produtos que atendem aos mais altos padrões de
                qualidade, garantindo sua satisfação e durabilidade.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FiHeart />
              </div>
              <h3>Paixão pelo Cliente</h3>
              <p>
                Colocamos nossos clientes no centro de tudo o que fazemos, buscando
                sempre superar expectativas.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FiShield />
              </div>
              <h3>Confiança</h3>
              <p>
                Construímos relacionamentos duradouros baseados em transparência,
                honestidade e compromisso.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <FiUsers />
              </div>
              <h3>Comunidade</h3>
              <p>
                Somos parte da comunidade de Tete e trabalhamos para contribuir
                com o desenvolvimento local.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>500+</h3>
              <p>Clientes Satisfeitos</p>
            </div>
            <div className="stat-card">
              <h3>1000+</h3>
              <p>Produtos Vendidos</p>
            </div>
            <div className="stat-card">
              <h3>100%</h3>
              <p>Qualidade Garantida</p>
            </div>
            <div className="stat-card">
              <h3>24/7</h3>
              <p>Atendimento</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Nossa Equipe</h2>
          <p className="section-subtitle">
            Profissionais dedicados ao seu atendimento
          </p>
          
          <p className="team-description">
            Nossa equipe é composta por profissionais apaixonados e comprometidos em
            oferecer a melhor experiência de compra. Cada membro é treinado para
            entender suas necessidades e ajudá-lo a encontrar os produtos perfeitos
            que combinam com seu estilo e personalidade.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
