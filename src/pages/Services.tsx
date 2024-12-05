import { Phone, MessageSquare, Workflow, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';

function Services() {
  useScrollToTop();

  const services = [
    {
      icon: Phone,
      title: 'AI Call System',
      description:
        'Our advanced AI call system handles customer inquiries 24/7, routes calls intelligently, and provides seamless integration with your existing phone systems. Reduce wait times and improve customer satisfaction with automated call handling that feels personal and professional.',
      features: [
        'Natural language processing',
        'Intelligent call routing',
        'Real-time transcription',
        'Call analytics and insights',
        'Custom voice and personality',
        'Multi-language support',
      ],
    },
    {
      icon: MessageSquare,
      title: 'Custom AI Chat & Phone Agents',
      description:
        'Personalized AI agents that understand your business and communicate naturally with your customers. Our agents learn from interactions to provide increasingly accurate and helpful responses while maintaining your brand voice.',
      features: [
        'Personalized responses',
        'Context awareness',
        'Learning capabilities',
        'Brand voice matching',
        'Seamless handoff to humans',
        'Multi-channel support',
      ],
    },
    {
      icon: Workflow,
      title: 'Workflow Automations',
      description:
        'Streamline your business processes with intelligent workflow automation. From document processing to customer onboarding, our AI-powered automation solutions reduce manual work and eliminate errors.',
      features: [
        'Process automation',
        'Document handling',
        'Task scheduling',
        'Integration capabilities',
        'Custom workflows',
        'Performance tracking',
      ],
    },
    {
      icon: BarChart3,
      title: 'Predictive Analysis',
      description:
        'Harness the power of AI to predict trends, optimize operations, and make data-driven decisions. Our predictive analysis tools provide actionable insights for your business growth.',
      features: [
        'Trend forecasting',
        'Risk assessment',
        'Customer behavior analysis',
        'Market intelligence',
        'Performance prediction',
        'Custom reporting',
      ],
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center text-gray-300"
          >
            Comprehensive AI solutions designed to transform your business operations and drive
            growth
          </motion.p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="inline-block p-3 bg-neon-blue/10 rounded-lg">
                      <service.icon className="h-12 w-12 text-neon-blue" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                    <p className="text-gray-300 text-lg">{service.description}</p>
                    <ul className="grid grid-cols-2 gap-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2 text-gray-300">
                          <div className="h-2 w-2 bg-neon-blue rounded-full" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-block bg-glass-light text-neon-blue px-6 py-3 rounded-lg hover:bg-glass-dark transition-all duration-200 border border-neon-blue neon-border"
                    >
                      Learn More
                    </Link>
                  </div>
                  <div
                    className={`bg-dark-800/50 p-8 rounded-lg ${
                      index % 2 === 1 ? 'md:order-1' : ''
                    }`}
                  >
                    <service.icon className="h-full w-full text-neon-blue opacity-10" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us today to discuss how our AI solutions can help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-glass-light text-neon-blue px-8 py-3 rounded-lg font-semibold hover:bg-glass-dark transition-all duration-200 border border-neon-blue neon-border"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;