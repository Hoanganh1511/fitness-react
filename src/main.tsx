import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/common/styles/fonts.css'
import { GlobalStyles } from '@/common/styles/GlobalStyles.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <App />
    </>
  </React.StrictMode>
)
