import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

function Team() {
  const team = [
    {
      name: 'Jonathan Vargas',
      role: 'CEO & Co-founder',
      bio: 'Jonathan is CEO and Co-Founder at Sension AI. As a sales technology expert with over 10+ years of experience, he has served as a trusted advisor to Fortune 500 companies spanning multiple industries. Specifically, he has guided companies on digital transformation efforts with GTM sales strategy and implementation. Prior to Sension AI , he was a Consultant at Boston Consulting Group in the Marketing & Sales Practice (MSP). Jonathan has a deep passion for AI technology, solving complex problems, and driving value for his clients.', 
      image: '',
      social: {
        linkedin: 'https://www.linkedin.com/in/vargasjon/',
        twitter: 'https://x.com/VargasJona95705',
        email: 'jonathan@sensionai.com',
      },
    },
    {
      name: 'Michael Mandl',
      role: 'COO & Co-founder',
      bio: 'Michael is Co-Founder and COO at Sension AI. He has 8+ years of experience in business development and sales for enterprise software companies. Prior to Sension AI, he served as a Commercial Account Executive at Chainalysis, the blockchain data platform. Micahel accelerated growth and profitability in web3, fintech, crypto, and other sectors with data, software, and services. Additionally, he managed the full sales cycle from lead generation to negotiating and closing. Michael is passionate about cutting-edge technology enjoys solving problems.',
      image: '',
      social: {
        linkedin: 'https://www.linkedin.com/in/the-mike-mandl/',
        twitter: '#',
        email: 'michael@sensionai.com',
      },
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
            Meet Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-center text-gray-300"
          >
            Passionate experts dedicated to transforming businesses through AI innovation
          </motion.p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-white">{member.name}</h2>
                  <p className="text-neon-blue font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-6">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-neon-blue transition-colors duration-200"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-gray-400 hover:text-neon-blue transition-colors duration-200"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-gray-400 hover:text-neon-blue transition-colors duration-200"
                    >
                      <Mail className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description:
                  "We constantly push the boundaries of what's possible with AI technology.",
              },
              {
                title: 'Excellence',
                description:
                  'We strive for excellence in everything we do, from code to customer service.',
              },
              {
                title: 'Integrity',
                description:
                  'We maintain the highest standards of integrity in our work and relationships.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
