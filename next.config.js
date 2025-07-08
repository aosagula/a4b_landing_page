const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
  },
  images: {
    formats: ['image/webp'],
    domains: ['www.agentic4biz.com'], // agregá aquí si usás imágenes externas
  },
  reactStrictMode: true,
  
  compress: true,
  experimental: {
    optimizeCss: true
  }
}