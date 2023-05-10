import Header from '@/common/components/Header'
import React from 'react'
import { SLayout } from './Styles'
import Footer from '@/common/components/Footer'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SLayout>
      <Header />
      {children}
      <Footer />
    </SLayout>
  )
}

export default Layout
