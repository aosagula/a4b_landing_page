module.exports = {
    i18n: {
      defaultLocale: 'es',
      locales: ['es', 'en'],
      localeDetection: false
    },
    detection: {
      order: ['cookie', 'header', 'querystring'],
      caches: ['cookie']
    }
  }
  