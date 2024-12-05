import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Team from './pages/Team';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import AIVoiceAssistant from './pages/AIVoiceAssistant';
import DemoVideos from './pages/DemoVideos';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/case-studies" element={<Blog />} />
            <Route path="/demo-videos" element={<DemoVideos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ai-assistant" element={<AIVoiceAssistant />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;