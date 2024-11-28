import './App.css'
import Eyes from './components/eyes/Eyes'
import Footer from './components/footer/Footer'
import Navbar from './components/header/Navbar'
import Herosection from './components/hero section/Herosection'
import Marquee from './components/marquee/Marquee'
import Projects from './components/Projects/Projects'
import Lessgo from './components/readySet/Lessgo'
import Bumper from './components/Reusable/Bumper'
import Reviews from './components/reviews/Reviews'
import Brief from './components/websiteBrief/Brief'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      < Navbar />
      < Herosection />
      < Marquee />
      < Brief />
      < Eyes />
      < Projects />
      < Reviews />
      < Bumper />
      < Lessgo />
      < Footer />
    </>
  )
}

export default App
