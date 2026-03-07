import { useTranslation } from 'react-i18next'

export default function WhatSection() {
    const { t } = useTranslation()

    return (
        <section className="what-section py-5" id="what-section">
            <div className="container">
                <h2 className="mb-4">{t('what.title')}</h2>
                <p className="mb-5 text-overlay-box">{t('what.intro')}</p>

                <div className="row">
                    {['ai', 'automation', 'integrations', 'consulting', 'customSoftware'].map((key) => (
                        <div key={key} className="card-transparent col-12 col-sm-6 col-md-4 col-lg-2 mx-auto mb-4">
                            <div className="h-100 border rounded p-3 shadow-sm">
                                <div className="fs-2 mb-2 ">{t(`what.solutions.${key}.emoji`)}</div>
                                <h5 className="fw-bold">{t(`what.solutions.${key}.title`)}</h5>
                                <p className="small">{t(`what.solutions.${key}.description`)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
