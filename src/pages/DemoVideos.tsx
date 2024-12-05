import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

function DemoVideos() {
  const videos = [
    {
      id: '1',
      title: 'AI Call System Demo',
      description: 'Watch our AI-powered call system handle customer inquiries in real-time.',
      embedId: 'YZvRGYZJVYo',
    },
    {
      id: '2',
      title: 'Custom AI Agent Showcase',
      description: 'See how our custom AI agents adapt and learn from interactions.',
      embedId: 'jvxQXvDejWE',
    },
    {
      id: '3',
      title: 'Workflow Automation in Action',
      description: 'Experience the power of our AI-driven workflow automation.',
      embedId: 'L_Guz73e6fw',
    },
  ];

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
            Demo Videos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-center max-w-3xl mx-auto text-gray-300"
          >
            See our AI solutions in action through detailed demonstrations
          </motion.p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 gap-12">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card p-8"
              >
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-[500px] rounded-lg"
                  />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">{video.title}</h2>
                <p className="text-gray-300">{video.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us to learn how these solutions can transform your business
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-glass-light text-neon-blue px-8 py-3 rounded-lg font-semibold hover:bg-glass-dark transition-all duration-200 border border-neon-blue neon-border"
            >
              <Play className="h-5 w-5" />
              <span>Schedule a Demo</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default DemoVideos;