import './App.css'
import Eyes from './components/eyes/Eyes'
import Navbar from './components/header/Navbar'
import Herosection from './components/hero section/Herosection'
import Marquee from './components/marquee/Marquee'
import Projects from './components/Projects/Projects'
import Reviews from './components/reviews/Reviews'
import Brief from './components/websiteBrief/Brief'

function App() {

  return (
    <>
      < Navbar />
      < Herosection />
      < Marquee />
      < Brief />
      < Eyes />
      < Projects />
      < Reviews />
    </>
  )
}

export default App
