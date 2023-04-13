import { useState } from 'react'

import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Card />
    </div>
  )
}

export default App
