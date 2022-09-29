import Footer from '../components/Footer'
import Nav from '../components/Nav'
import About from './About'
import Contact from './Contact'
import Experience from './Experience'
import Portfolio from './Portfolio'

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAh8881qycsAOiMb-j0R1riDIRUDGZqtIE",
  authDomain: "erininabox-98bc9.firebaseapp.com",
  projectId: "erininabox-98bc9",
  storageBucket: "erininabox-98bc9.appspot.com",
  messagingSenderId: "616370587206",
  appId: "1:616370587206:web:c255980eecf297827bec47"
};

// initialize firebase & firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// initialize analytics - window check because SSR
export const analytics = () => {
  return ((typeof window !== "undefined") ? 
  getAnalytics() : null);
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
          <Portfolio data={portfolioItems} />
          {/* <h2 className='numbered header' id='experience'>Experience</h2>
          <Experience /> */}
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
