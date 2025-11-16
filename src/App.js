import './App.css';
import './index.css';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AutomationsSection } from './components/AutomationsSection';
import { EventsSection } from './components/EventsSection';
import { ContactSection } from './components/ContactSection';
import { BackgroundEffects } from './components/BackgroundEffects';

function App() {
  return (
    <div className="App selection:bg-cyan-500 selection:text-black">
      <BackgroundEffects />
      <Navigation />
      <HeroSection />
      <AutomationsSection />
      <EventsSection />
      <ContactSection />
    </div>
  );
}

export default App;
