import { useTranslation } from 'react-i18next'

export default function VisionSection() {
    const { t } = useTranslation()

    return (
        <section className="vision-section py-5" id="vision-section">
            <div className="container">
                <h2 className="mb-4 text-white">{t('vision.title')}</h2>
                <p className="mb-5 text-overlay-box vision-text">{t('vision.text')}</p>
            </div>
        </section>
    )
}
