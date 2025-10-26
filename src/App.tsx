import './App.css'
import Navbar from './components/navbar/Navbar'

import Home from './components/homepage/Home'
import Education from './components/Education/Education'
function App() {

  return (
<>
      <Navbar />
    <div className="App">
      <Home/>
      <Education/>
    </div>
    </>
  )
}

export default App
