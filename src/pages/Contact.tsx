import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useEffect, useRef } from 'react';

function Contact() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleIframeLoad = () => {
      if (iframeRef.current) {
        const updateIframeHeight = () => {
          const iframe = iframeRef.current;
          if (iframe) {
            iframe.style.height = '1200px'; // Increased height to ensure full calendar visibility
          }
        };
        updateIframeHeight();
      }
    };

    window.addEventListener('message', handleIframeLoad);
    return () => window.removeEventListener('message', handleIframeLoad);
  }, []);

  return (
    <div className="pt-16 bg-dark-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dark-800 to-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-neon-blue/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-center gradient-text"
          >
            Speak to an Expert
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-center max-w-3xl mx-auto text-gray-300"
          >
            Get personalized AI solutions for your business needs
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: 'Phone',
                content: '(877) 705-4332',
                link: 'tel:+18777054332',
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'jonathan@sensionai.com',
                link: 'mailto:jonathan@sensionai.com',
              },
              {
                icon: MapPin,
                title: 'Location',
                content: '30 N Gould St STE R Sheridan, WY 82801',
                link: 'https://maps.google.com',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon-blue/10 mb-4">
                  <item.icon className="h-6 w-6 text-neon-blue" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <a
                  href={item.link}
                  className="text-gray-300 hover:text-neon-blue transition-colors duration-200"
                >
                  {item.content}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Booking Widget */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Schedule a Consultation</h2>
              <div className="relative w-full overflow-hidden rounded-lg bg-white/5 p-4">
                <iframe 
                  ref={iframeRef}
                  src="https://api.leadconnectorhq.com/widget/booking/EkixEmejV1SvqAKKmkMt" 
                  style={{ 
                    width: '100%',
                    height: '1200px',
                    border: 'none',
                    borderRadius: '8px',
                    backgroundColor: 'transparent'
                  }}
                  scrolling="no" 
                  id="EkixEmejV1SvqAKKmkMt_1733279294263"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;