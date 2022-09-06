import Footer from '../components/Footer'
import Nav from '../components/Nav'
import About from './About'
import Contact from './Contact'
import Experience from './Experience'
import Portfolio from './Portfolio'


export default function Home() {
  
  return (
    <div>
      <Nav />
      <main>
        <div className='landing-greeting'>
          <div className='landing-profile-pic-container'>
            <img src="/imgs/Erin.jpg" className='landing-profile-pic '/>
          </div>
          <div className='landing__header'>
            <h1>
                Hi! <i className="fa-solid fa-mug-hot icon__para"></i> I'm  Erin Halden,
            </h1>
          </div>
        </div>

        <div className='landing-description'>
          <h2>I am a front-end web developer located in the Bay Area.</h2>
          <h2>I love to build things for the web.</h2>
        </div>

        <div className='sections'>
          <h2 className='numbered header' id='about'>About</h2>
          <About />
          <h2 className='numbered header' id='portfolio'>Portfolio</h2>
          <Portfolio />
          <h2 className='numbered header' id='experience'>Experience</h2>
          <Experience />
          <h2 className='numbered header' id='contact'>Contact</h2>
          <Contact />
        </div>
        <div className='bottom'>

        </div>
      </main>
      <Footer />
    </div>
  )
}
