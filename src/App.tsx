import { useState } from 'react'
import Layout from './layout/Layout'
import Home from '@/container/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default App
