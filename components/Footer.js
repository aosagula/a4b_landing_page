import { useTranslation } from 'react-i18next'
import Link from 'next/link'

export default function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="footer-section bg-dark text-white py-5" id="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h2 className="mb-4">{t('contact')}</h2>
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

                    <div className="col-md-6 text-md-start text-center">
                        <p>
                            📧 <a href="mailto:contacto@agentic4biz.com" className="text-white">contacto@agentic4biz.com</a><br />
                            📞 +54 9 11 1234-5678
                        </p>
                        <div className="mt-2">
                            <a href="https://www.linkedin.com/company/agentic4biz" target="_blank" rel="noopener noreferrer" className="text-white me-3">LinkedIn</a>
                            <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" className="text-white me-3">WhatsApp</a>
                            <Link href="/privacidad" className="text-white me-3">Política de privacidad</Link>
                            <br />
                        </div>
                        <h4 className="mb-3 mt-5">Agentic4biz</h4>
                        <p>© 2025. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
