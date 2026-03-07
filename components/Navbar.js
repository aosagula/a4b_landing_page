import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const { t } = useTranslation()
  const router = useRouter()

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const switchLanguage = (lng) => {
    router.push(router.pathname, router.asPath, { locale: lng })
  }

  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <button className="btn navbar-brand d-flex align-items-center text-white" onClick={() => scrollTo('hero-section')}>
            <Image src="/images/logo3.png" alt="Logo" width={32} height={32} className="me-2" />
            Agentic4biz
          </button>
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
                <button className="btn nav-link" onClick={() => scrollTo('hero-section')}>{t('home')}</button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link" onClick={() => scrollTo('vision-section')}>{t('vision.title')}</button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link" onClick={() => scrollTo('what-section')}>{t('what.title')}</button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link" onClick={() => scrollTo('how-section')}>{t('how.title')}</button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link" onClick={() => scrollTo('use-cases-section')}>{t('useCases.title')}</button>
              </li>
              <li className="nav-item">
                <button className="btn nav-link" onClick={() => scrollTo('contact-section')}>{t('contact')}</button>
              </li>
              <li className="nav-item">
                {router.locale === 'en' ? (
                  <button className="btn btn-sm ms-2" onClick={() => switchLanguage('es')} aria-label="Cambiar a Español">
                    <Image src="/images/es-flag.png" alt="Español" width={24} height={24} />
                  </button>
                ) : (
                  <button className="btn btn-sm ms-2" onClick={() => switchLanguage('en')} aria-label="Switch to English">
                    <Image src="/images/en-flag.png" alt="English" width={24} height={24} />
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}
