// pages/index.js
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  const { t } = useTranslation()
  const heroRef = useRef(null)
  const whatRef = useRef(null)
  const howRef = useRef(null)
  const contactRef = useRef(null)

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const switchLanguage = (lng) => {
    i18next.changeLanguage(lng)
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="/images/logo.png" alt="Logo" width="32" height="32" className="me-2" />
            Agentic4biz
          </a>
          <button className="navbar-toggler" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  
                  >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn nav-link" onClick={() => scrollTo(heroRef)}>{t('home')}</button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link" onClick={() => scrollTo(whatRef)}>{t('what')}</button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link" onClick={() => scrollTo(howRef)}>{t('how')}</button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link" onClick={() => scrollTo(contactRef)}>{t('contact')}</button>
              </li>
              <li className="nav-item">
                {i18next.language === 'en' ? (
                  <button className="btn  btn-sm ms-2" onClick={() => switchLanguage('es')}>
                    <img src="/images/es-flag.png" alt="Español" width="24" />
                  </button>
                ) : (
                  <button className="btn  btn-sm ms-2" onClick={() => switchLanguage('en')}>
                    <img src="/images/en-flag.png" alt="English" width="24" />
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}

        className="hero-section min-vh-100"
      >
        <div className="hero-overlay">
          <h1 className="display-4">{t('heroTitle')}</h1>
          <p className="lead">{t('heroSubtitle')}</p>
          <p className="lead">{t('heroSubtitle2')}</p>
        </div>
      </section>

      {/* Qué hacemos */}
      <section ref={whatRef} className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-4">{t('what')}</h2>
          <p>{t('whatContent')}</p>
        </div>
      </section>

      {/* Cómo lo hacemos */}
      <section ref={howRef} className="py-5 text-center">
        <div className="container">
          <h2 className="mb-4">{t('how')}</h2>
          <ol className="list-group list-group-numbered">
            <li className="list-group-item">{t('step1')}</li>
            <li className="list-group-item">{t('step2')}</li>
            <li className="list-group-item">{t('step3')}</li>
            <li className="list-group-item">{t('step4')}</li>
          </ol>
        </div>
      </section>

      {/* Contacto */}
      <section ref={contactRef} className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-4">{t('contact')}</h2>
          <form action="https://formspree.io/f/your-form-id" method="POST" className="mx-auto contact-form-container">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">{t('name')}</label>
              <input type="text" className="form-control" id="name" name="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">{t('email')}</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">{t('message')}</label>
              <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">{t('submit')}</button>
          </form>
        </div>
      </section>
    </div>
  )
}
