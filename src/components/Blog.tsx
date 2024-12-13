import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const posts = [
    {
      title: "Principal's Message",
      excerpt: "The words from the head of the institution!",
      date: "March 10, 2024",
      link: "http://donboscoberhampore.in/school-message-desk.aspx"
    },
    {
      title: "Life of Don Bosco",
      excerpt: "A Life Sketch of St. John Bosco, the inspiration for the school!",
      date: "March 5, 2024",
      link: "http://donboscoberhampore.in/don-bosco.aspx"
    },
    {
      title: "About Rector Major",
      excerpt: "Know about Angel Fernandez Artime, the Rector Major of the Salesian Congregation.",
      date: "February 28, 2024",
      link: "http://donboscoberhampore.in/rector-major.aspx"
    },
    {
      title: "Prospectus of the School",
      excerpt: "The Course of Studies, Aim, Admission and other facilities.",
      date: "March 28, 2024",
      link: "http://donboscoberhampore.in/prospectus.aspx"
    },
    {
      title: "Official Website",
      excerpt: "This is just the clone, have a look at the real website!",
      date: "March 9, 2024",
      link: "http://donboscoberhampore.in"
    },
    {
      title: "Facilities",
      excerpt: "Here is a quick tour of what our school can provide to you!",
      date: "March 19, 2024",
      link: "http://donboscoberhampore.in/facilities.aspx"
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-[#0C0C0C] to-[#2D1B69]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Quick Info</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 text-purple-400 mb-4">
                  <BookOpen className="h-5 w-5" />
                  <span className="text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;