import { useState } from 'react'
import Personal_info from './components/Personal_info'
import Skills from './components/Skills'
import Formation from './components/Formation'
import Personal_accomplishment from './components/Personal_accomplishment'
import { GiSkills } from 'react-icons/gi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <div className="flex__container">
        <div className="flex__container_sidebar">
          <Personal_info />
          <Skills />
        </div>
        <h1 id="h1">
          <GiSkills />
          Curriculum Vitae
        </h1>
        <div className="flex__container_main">
          <Formation />
          <Personal_accomplishment />
        </div>
      </div>
    </div>
  )
}

export default App
