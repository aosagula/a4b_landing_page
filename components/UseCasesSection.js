import { useTranslation } from 'react-i18next'

export default function UseCasesSection() {
    const { t } = useTranslation()

    return (
        <section className='use-cases-section py-5' id="use-cases-section">
            <div className="container">
                <h2>{t('useCases.title')}</h2>
                <p>{t('useCases.intro')}</p>
                <div className="row">
                    {Object.entries(t('useCases.cases', { returnObjects: true })).map(([key, item]) => (
                        <div key={key} className="col-md-4 mb-4">
                            <div className="p-3 border rounded h-100 shadow-sm text-gray">
                                <div className="fs-2 mb-2">{item.emoji}</div>
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
