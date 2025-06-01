// pages/index.js
import { useRef, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import i18next from 'i18next'
import 'bootstrap/dist/css/bootstrap.min.css'





export default function Home() {

  const { t } = useTranslation()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  
  const heroRef = useRef(null)
  const visionRef = useRef(null)
  const whatRef = useRef(null)
  const howRef = useRef(null)
  const useCasesRef = useRef(null)
  const contactRef = useRef(null)

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const switchLanguage = (lng) => {
    i18next.changeLanguage(lng)
    router.push(router.pathname, router.asPath, { locale: lng })

  }
  if (!mounted) return null
  return (
   
    <div suppressHydrationWarning={true}>
      
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="/images/logo2.png" alt="Logo" width="32" height="32" className="me-2" />
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
                <button className="btn nav-link" onClick={() => scrollTo(visionRef)}>{t('vision.title')}</button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link" onClick={() => scrollTo(whatRef)}>{t('what.title')}</button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link" onClick={() => scrollTo(howRef)}>{t('how.title')}</button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link" onClick={() => scrollTo(useCasesRef)}>{t('useCases.title')}</button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link" onClick={() => scrollTo(contactRef)}>{t('contact')}</button>
              </li>
              <li className="nav-item">
                {router.locale === 'en' ? (
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
          {/* <p className="lead">{t('heroSubtitle')}</p> */}
          <p className="lead">{t('heroSubtitle2')}</p>
        </div>
      </section>
      {/* Vision */}
      <section ref={visionRef} className="vision-section py-5">
        <div className="container">
          <h2 className="mb-4 text-white">{t('vision.title')}</h2>
          <p className="mb-5 text-overlay-box vision-text">{t('vision.text')}</p>
        </div>
      </section>

      {/* Qué hacemos */}
      <section ref={whatRef} className="what-section py-5">
        <div className="container">
          <h2 className="mb-4">{t('what.title')}</h2>
          <p className="mb-5 text-overlay-box">{t('what.intro')}</p>

          <div className="row">
            {['ai', 'automation', 'integrations', 'consulting', 'customSoftware'].map((key) => (
              <div key={key} className=" card-transparent col-12 col-sm-6 col-md-4 col-lg-2 mx-auto mb-4">
                <div className="h-100 border rounded p-3  shadow-sm">
                  <div className="fs-2 mb-2 ">{t(`what.solutions.${key}.emoji`)}</div>
                  <h5 className="fw-bold">{t(`what.solutions.${key}.title`)}</h5>
                  <p className="small">{t(`what.solutions.${key}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo lo hacemos */}
      <section ref={howRef} className="min-vh-100 py-5 how-section">
        <div className="container ">
          <h2 className="mb-4 text-center text-white">{t('how.title')}</h2>
          <ul className="how-list-group list-group-numbered bg-transparent ">
            {Object.keys(t('how.steps', { returnObjects: true })).map(key => {
              const step = t(`how.steps.${key}`, { returnObjects: true });
              return (
                <li key={key} className="list-group-item how-step-item text-white bg-transparent mt-3">
                  {/* <span className="fs-4 me-2">{step.emoji}</span> */}
                  <strong>{step.title}</strong><br />
                  <span>{step.description}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section ref={useCasesRef} className='use-cases-section py-5'>
        <div className="container">
          <h2>{t('useCases.title')}</h2>
          <p>{t('useCases.intro')}</p>
          <div className="row">
            {Object.entries(t('useCases.cases', { returnObjects: true })).map(([key, item]) => (
              <div key={key} className="col-md-4 mb-4">
                <div className="p-3 border rounded h-100 shadow-sm  text-gray">
                  <div className="fs-2 mb-2">{item.emoji}</div>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      {/* <section ref={contactRef} className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-4">{t('contact')}</h2>
          <form action="https://formspree.io/f/mvgrpdky" method="POST" className="mx-auto contact-form-container">
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
      </section> */}



      <footer className="footer-section bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            {/* Columna 1: Formulario */}
            <div className="col-md-6 mb-4">
              <h2 ref={contactRef} className="mb-4">{t('contact')}</h2>
              <form action="https://formspree.io/f/mvgrpdky" method="POST" className="contact-form-footer">
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

            {/* Columna 2: Información de empresa */}
            <div className="col-md-6 text-md-start text-center">
              
              <p>
                📧 <a href="mailto:contacto@agentic4biz.com" className="text-white">contacto@agentic4biz.com</a><br />
                📞 +54 9 11 1234-5678
              </p>
              <div className="mt-2">
                <a href="https://www.linkedin.com/company/agentic4biz" target="_blank" rel="noopener noreferrer" className="text-white me-3">LinkedIn</a>
                <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" className="text-white me-3">WhatsApp</a>
                <a href="/privacidad" className="text-white me-3">Política de privacidad</a>
                <br />
                {/* <a href="https://calendly.com/agentic4biz/reunion" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm mt-3">📅 Agendá una reunión</a> */}
              </div>
              <h4 className="mb-3 mt-5">Agentic4biz</h4>
              <p>© 2025. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
