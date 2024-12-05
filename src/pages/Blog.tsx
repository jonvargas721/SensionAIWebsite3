import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Blog() {
  const articles = [
    {
      id: '1',
      title: 'AI Transformation in the SMB Market: A New Era of Innovation',
      date: '2024-03-15',
      readTime: '15 min read',
      excerpt:
        'Explore how artificial intelligence is revolutionizing small and medium-sized businesses, driving efficiency, and creating new opportunities for growth.',
      content: `[Previous content remains the same]`,
    },
    {
      id: '2',
      title: 'Top 5 AI Tools for Small Businesses in 2024',
      date: '2024-03-10',
      readTime: '8 min read',
      excerpt:
        'Discover the most impactful AI tools that are helping small businesses streamline operations and boost productivity.',
    },
    {
      id: '3',
      title: 'How to Implement AI in Your Business: A Step-by-Step Guide',
      date: '2024-03-05',
      readTime: '12 min read',
      excerpt:
        'Learn the practical steps to successfully integrate AI solutions into your business operations.',
    },
    {
      id: '4',
      title: 'The ROI of AI: Measuring Success in Small Business',
      date: '2024-02-28',
      readTime: '10 min read',
      excerpt:
        'Understanding how to measure and maximize the return on investment from your AI implementations.',
    },
  ];

  // Sort articles by date in descending order (newest first)
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const mainArticle = sortedArticles[0];
  const relatedArticles = sortedArticles.slice(1);

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
            Case Studies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-center max-w-3xl mx-auto text-gray-300"
          >
            Success stories and insights from our AI implementations
          </motion.p>
        </div>
      </section>

      {/* Main Article */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card overflow-hidden"
          >
            <div className="p-8">
              <Link to={`/case-studies/${mainArticle.id}`} className="group">
                <h2 className="text-3xl font-bold mb-4 text-white group-hover:text-neon-blue transition-colors duration-200">
                  {mainArticle.title}
                </h2>
              </Link>
              <div className="flex items-center text-gray-400 mb-6">
                <Calendar className="h-5 w-5 mr-2" />
                <span className="mr-4">{mainArticle.date}</span>
                <Clock className="h-5 w-5 mr-2" />
                <span>{mainArticle.readTime}</span>
              </div>
              <p className="text-xl text-gray-300 mb-8">{mainArticle.excerpt}</p>
              <Link
                to={`/case-studies/${mainArticle.id}`}
                className="inline-flex items-center text-neon-blue font-semibold hover:text-neon-purple transition-colors duration-200"
              >
                Read Full Case Study <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">More Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card overflow-hidden"
              >
                <div className="p-6">
                  <Link to={`/case-studies/${article.id}`} className="group">
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-neon-blue transition-colors duration-200">
                      {article.title}
                    </h3>
                  </Link>
                  <div className="flex items-center text-gray-400 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{article.date}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{article.readTime}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{article.excerpt}</p>
                  <Link
                    to={`/case-studies/${article.id}`}
                    className="inline-flex items-center text-neon-blue font-semibold hover:text-neon-purple transition-colors duration-200"
                  >
                    Read More <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;