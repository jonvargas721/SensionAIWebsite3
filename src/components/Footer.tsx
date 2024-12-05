import { Brain, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';

function Footer() {
  useScrollToTop();

  return (
    <footer className="bg-dark-800 border-t border-glass-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-neon-blue" />
              <span className="ml-2 text-xl font-bold text-white">Sension AI</span>
            </div>
            <p className="text-gray-400">
              Transforming businesses through intelligent automation solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                'Home',
                'Services',
                'Team',
                'Case Studies',
                'Demo Videos',
                'AI Assistant',
                'Contact',
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-neon-blue transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'AI Call System',
                'Custom AI Agents',
                'Workflow Automation',
                'Predictive Analysis',
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-gray-400 hover:text-neon-blue transition-colors duration-200"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>30 N Gould St STE R</li>
              <li>Sheridan, WY 82801</li>
              <li>jonathan@sensionai.com</li>
              <li>(877) 705-4332</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-glass-light text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sension AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;