import Footer from '../components/Footer'
import Nav from '../components/Nav'
import About from '../components/About'
import Contact from '../components/Contact'
import Portfolio from '../components/Portfolio'

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBOtNsTA6PuROsNDWpM64Yx0GlPaMlHLrE",
  authDomain: "erininabox-domain.firebaseapp.com",
  projectId: "erininabox-domain",
  storageBucket: "erininabox-domain.appspot.com",
  messagingSenderId: "424637673018",
  appId: "1:424637673018:web:43db98b70bf08f9a558f03",
  measurementId: "G-G7D4BLKJVM"
};

// initialize firebase & firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// initialize analytics - window check because SSR
export const analytics = async () => {
  return ((typeof window !== "undefined") ? 
  getAnalytics(app) : null);
} 

// Get Portfolio Items
const queryPItemsSnapshot = await getDocs(collection(db, "portfolioItems"));
let portfolioItems = [];
queryPItemsSnapshot.forEach((doc) => {
  portfolioItems.push(doc.data())
})

// Get Experience Items

// console.log(portfolioItems)

export default function Home() {
  
  return (
    <div>
      Coming soon...
      {/* <Nav />
      <main>
        <div className='landing-greeting'>
          <div className='landing-profile-pic-container'>
            <img src="/imgs/Erin.jpg" className='landing-profile-pic' alt="photo of white woman with very short hair, hot pink lipstick and glasses"/>
          </div>
          <div className='landing__header'>
            <h1>
                Hi! <i className="fa-solid fa-mug-hot icon__para"></i> I am  Erin Halden,
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
          <Portfolio data={portfolioItems} />
          <h2 className='numbered header' id='contact'>Contact</h2>
          <Contact />
        </div>
        <div className='bottom'>

        </div>
      </main>
      <Footer /> */}
    </div>
  )
}
