import { useTranslation } from 'react-i18next'

export default function HeroSection() {
    const { t } = useTranslation()

    return (
        <section id="hero-section" className="hero-section min-vh-100">
            <div className="hero-overlay">
                <h1 className="display-4">{t('heroTitle')}</h1>
                <p className="lead">{t('heroSubtitle2')}</p>
            </div>
        </section>
    )
}
