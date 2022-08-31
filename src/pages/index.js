import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div>
      <Nav />
      <main>
        <Intro />
      </main>
      <Footer />
    </div>
  )
}
