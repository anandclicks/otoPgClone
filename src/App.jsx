import { useState } from 'react'

import './App.css'
import PgOne from './components/pgOne'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <PgOne/>
    </>
  )
}

export default App
