// pages/index.js
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import Head from 'next/head'

import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import VisionSection from '../components/VisionSection'
import WhatSection from '../components/WhatSection'
import HowSection from '../components/HowSection'
import UseCasesSection from '../components/UseCasesSection'
import Footer from '../components/Footer'

export default function Home() {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    createChat({
      webhookUrl: 'https://n8n-production-a4bdev.up.railway.app/webhook/8ab12c4f-7c84-465b-b3a7-2a6ea38313ba/chat',
      inputFieldName: 'chatInput',
      initialMessages: [
        t('chat.sayhi'),
      ],
      showWelcomeScreen: false,
      defaultLanguage: 'es',
      i18n: {
        es: {
          title: 'A4B Chat',
          subtitle: "",
          footer: '',
          getStarted: 'New Conversation',
          inputPlaceholder: t('chat.inputPlaceholder'),
        },
        en: {
          title: 'A4B Chat',
          subtitle: "",
          footer: '',
          getStarted: 'New Conversation',
          inputPlaceholder: t('chat.inputPlaceholder'),
        },
      },
    });

    return () => {
      // Cleanup the previously created chat widget to prevent duplicates in React Strict Mode
      const chatRootDivs = document.querySelectorAll('.chat-window, .chat-toggle, .n8n-chat-wrapper');
      chatRootDivs.forEach(div => div.remove());
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!mounted) return null

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{`Agentic4Biz - ${t('title')}`}</title>
        <meta name="description" content={t('content')} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.agentic4biz.com/" />

        {/* Open Graph */}
        <meta property="og:title" content={`Agentic4Biz - ${t('title')}`} />
        <meta property="og:description" content={t('content')} />
        <meta property="og:url" content="https://www.agentic4biz.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.agentic4biz.com/images/logo3.png" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Agentic4Biz - ${t('title')}`} />
        <meta name="twitter:description" content={t('content')} />
        <meta name="twitter:image" content="https://www.agentic4biz.com/images/logo3.png" />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Agentic4Biz",
            url: "https://www.agentic4biz.com",
            logo: "https://www.agentic4biz.com/images/logo3.png",
            description: t('content'), // puede ser texto traducido
            address: {
              "@type": "PostalAddress",
              addressCountry: "AR",
            },
          }),
        }}
      />

      <Navbar />
      <HeroSection />
      <VisionSection />
      <WhatSection />
      <HowSection />
      <UseCasesSection />
      <Footer />
    </div>
  )
}
