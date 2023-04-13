import { useState } from 'react'
import ButtonComponents from './components/ButtonComponents'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ButtonComponents bg='red' color='green' title='wassup'  />
    </div>
  )
}

export default App
