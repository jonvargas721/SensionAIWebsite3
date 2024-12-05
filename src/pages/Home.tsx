import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Phone, MessageSquare, Workflow, BarChart3, ChevronRight } from 'lucide-react';

function Home() {
  return (
    <div className="pt-16 bg-dark-900">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-radial from-neon-blue/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Transform Your Business with AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Empower your SMB with cutting-edge AI solutions that drive growth and efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-glass-light text-neon-blue px-8 py-4 rounded-lg font-semibold hover:bg-glass-dark transition-all duration-200 border border-neon-blue neon-border"
              >
                Get Started
              </Link>
              <Link 
                to="/demo-videos"
                className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold hover:bg-glass-light transition-all duration-200 border border-white/20"
              >
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SMB Market Statistics */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">SMB Market Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '80%', description: 'of SMB users are brining their own AI tools to work' },
              { number: '79%', description: 'of SMB leaders say they believe AI adoption is critical for their company to remain competive.' },
              { number: '61%', description: 'of these leaders also say their company lacks a vision and plan to implement AI.' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card p-8 text-center"
              >
                <div className="text-4xl font-bold text-neon-blue mb-4">{stat.number}</div>
                <p className="text-gray-300">{stat.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8 text-gray-400 text-sm">
            <p>Reference: <a href="https://www.microsoft.com/en-us/microsoft-365/blog/2024/06/05/workers-worldwide-are-embracing-ai-especially-in-small-and-medium-size-businesses/" className="text-neon-blue hover:text-neon-purple transition-colors duration-200">Microsoft 365 Blog</a></p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Phone,
                title: 'AI Call System',
                description: 'Automated call handling with natural language processing',
              },
              {
                icon: MessageSquare,
                title: 'Custom AI Agents',
                description: 'Personalized chatbots that understand your business',
              },
              {
                icon: Workflow,
                title: 'Workflow Automation',
                description: 'Streamline operations with intelligent process automation',
              },
              {
                icon: BarChart3,
                title: 'Predictive Analysis',
                description: 'Data-driven insights for informed decision making',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card p-6 hover:bg-glass-dark transition-all duration-200"
              >
                <service.icon className="h-12 w-12 text-neon-blue mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="text-neon-blue font-semibold flex items-center hover:text-neon-purple transition-colors duration-200"
                >
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Understanding your needs' },
              { step: '02', title: 'Analysis', description: 'Identifying opportunities' },
              { step: '03', title: 'Implementation', description: 'Deploying solutions' },
              { step: '04', title: 'Optimization', description: 'Continuous improvement' },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card p-6 relative"
              >
                <div className="text-4xl font-bold text-neon-blue/20 absolute top-4 right-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Clients Served' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '3+', label: 'Hours saved per day' },
              { number: '$80k', label: 'Costs saved per month' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-neon-blue mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Let's Talk</h2>
          <div className="glass-card p-8">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/DxjR57w2tmZIwbkZrHLh"
              style={{ width: '100%', height: '868px', border: 'none', borderRadius: '3px' }}
              id="inline-DxjR57w2tmZIwbkZrHLh" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Contact Form SensionAI"
              data-height="868"
              data-layout-iframe-id="inline-DxjR57w2tmZIwbkZrHLh"
              data-form-id="DxjR57w2tmZIwbkZrHLh"
              title="Contact Form SensionAI"
            />
            <script src="https://link.msgsndr.com/js/form_embed.js" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;