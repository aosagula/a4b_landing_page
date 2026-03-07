import { useTranslation } from 'react-i18next'

export default function HowSection() {
    const { t } = useTranslation()

    return (
        <section className="min-vh-100 py-5 how-section" id="how-section">
            <div className="container">
                <h2 className="mb-4 text-center text-white">{t('how.title')}</h2>
                <ul className="how-list-group list-group-numbered bg-transparent">
                    {Object.keys(t('how.steps', { returnObjects: true })).map(key => {
                        const step = t(`how.steps.${key}`, { returnObjects: true });
                        return (
                            <li key={key} className="list-group-item how-step-item text-white bg-transparent mt-3">
                                <strong>{step.title}</strong><br />
                                <span>{step.description}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    )
}
