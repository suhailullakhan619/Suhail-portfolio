import './App.css'
import Navbar from './components/navbar/Navbar'

import Home from './components/homepage/Home'
import Education from './components/Education/Education'
import Skills from './components/Skills/skills'
function App() {

  return (
<>
      <Navbar />
    <div className="App">
      <Home/>
      <Education/>
      <Skills/>
    </div>
    </>
  )
}

export default App
