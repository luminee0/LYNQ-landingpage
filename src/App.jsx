import './index.css';
import './textures.css';

import './index.css'; // Tailwind styles

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesCarousel from './components/FeaturesCarousel';
import Reputation from './components/Reputation';
import FaucetModule from './components/FaucetModule';
import BuiltOnAptos from './components/BuiltOnAptos';
import CTAandFAQ from './components/CTAandFAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white font-sans relative">
      {/* Cursor hover glow, texture bg, and scroll snapping could go here if added later */}
      
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <div className="bg-grid">
          <FeaturesCarousel />
          <Reputation />
          <FaucetModule />
          <BuiltOnAptos />
          <CTAandFAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
