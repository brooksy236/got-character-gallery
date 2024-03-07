import { useState } from 'react'
import Character from '../src/components/Character'
import CharacterGallery from '../src/components/CharacterGallery'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Character />
      <CharacterGallery />
    </>
  )
}

export default App
