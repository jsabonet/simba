import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from 'react-icons/fi'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você adicionaria a lógica para enviar o formulário
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Entre em Contacto</h1>
          <p>Estamos aqui para ajudar. Envie-nos uma mensagem!</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Informações de Contacto</h2>
              <p className="info-description">
                Visite-nos, ligue ou envie um email. Teremos prazer em atendê-lo!
              </p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <FiMapPin />
                  </div>
                  <div className="info-content">
                    <h3>Endereço</h3>
                    <p>
                      Av. 24 de Julho<br />
                      Cidade de Tete<br />
                      Ao pé do pensão Alves
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <FiPhone />
                  </div>
                  <div className="info-content">
                    <h3>Telefone</h3>
                    <p>+258 84 123 4567</p>
                    <p>+258 87 654 3210</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <FiMail />
                  </div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p>info@sjsimbastore.co.mz</p>
                    <p>vendas@sjsimbastore.co.mz</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <FiClock />
                  </div>
                  <div className="info-content">
                    <h3>Horário de Funcionamento</h3>
                    <p>Segunda - Sexta: 8h - 18h</p>
                    <p>Sábado: 9h - 15h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>Envie-nos uma Mensagem</h2>
              
              {submitted && (
                <div className="success-message">
                  <FiSend />
                  <p>Mensagem enviada com sucesso! Responderemos em breve.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nome Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+258"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Assunto *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensagem *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  <FiSend /> Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Como Chegar</h2>
          <p className="section-subtitle">
            Encontre-nos facilmente na Av. 24 de Julho, Tete
          </p>
          
          <div className="map-placeholder">
            <FiMapPin />
            <p>
              <strong>Sj Simba Store</strong><br />
              Av. 24 de Julho, Cidade de Tete<br />
              Ao pé do pensão Alves
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
