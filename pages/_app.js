import '../styles/globals.css'
import { useEffect } from 'react'

import '../i18n' // 👈 
import { appWithTranslation } from 'next-i18next'
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.bundle.min.js') // ✅ Esto incluye Popper
    
  }, [])
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)