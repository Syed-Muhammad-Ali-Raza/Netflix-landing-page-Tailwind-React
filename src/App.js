import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Faq from './Faq';

function App() {
  return (
    <>
      <div className='bg-cover bg-center bg-no-repeat ' style={{ backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/291d18e4-fcd3-45ec-9843-6c39247bc0ae/PK-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg)` }}>
        <div className='blur-0'>
          <Header />
          <Hero />
        </div>

      </div>
      <div className='bg-black text-white'>
        <Section1 />
        <div className='bg-slate-500 h-2'></div>
        <Section2 />
        <div className='bg-slate-500 h-2'></div>
        <Section3 />
        <div className='bg-slate-500 h-2'></div>
        <Section4/>
        <div className='bg-slate-500 h-2'></div>
        <Faq/>
        <div className='bg-slate-500 h-2'></div>
        <Footer/>




      </div>

    </>
  );
}

export default App;
