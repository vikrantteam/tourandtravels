import { useState } from 'react'
import AllCompFile from './Component/AllCompFile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AllCompFile />
    </>
  )
}

export default App
