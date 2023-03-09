import './App.css';
import {
  NavBar,
  Billing,
  Business,
  Button,
  Carddeal,
  Clients,
  Cta,
  Feedback,
  Footer,
  Getstarted,
  Hero,
  Stats,
  Testimonials,
} from './components';
import styles from './Style';

function App() {
  return (
    <div className=" bg-primary w-full">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={` bg-primary ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={` bg-primary ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> <Business /> <Billing /> <Carddeal />
          <Testimonials /> <Clients /> <Cta /> <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
