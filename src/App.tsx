import './App.css'
import Navbar from './components/navbar/Navbar'

import Home from './components/homepage/Home'
import Education from './components/Education/Education'
import Skills from './components/Skills/skills'
import Experience from './components/Experience/Experience'
import Projects from './components/projectsSection/projects'
import ContactMe from './components/contactMe/contactMe'
function App() {

  return (
<>
      <Navbar />
    <div className="App">
      <Home/>
      <Education/>
      <Skills/>
      <Experience/>
      <Projects/>
      <ContactMe/>
    </div>
    </>
  )
}

export default App
