module.exports = {
    i18n: {
      defaultLocale: 'es',
      locales: ['es', 'en'],
      localeDetection: true
    },
    detection: {
      order: ['cookie', 'header', 'querystring'],
      caches: ['cookie']
    }
  }
  