import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  }),
};

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-[#2D1B69] to-[#0C0C0C]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-300 text-lg">
            Feel free to reach out using the methods below.
          </p>
          <div className="w-20 h-1 bg-purple-500 mx-auto mt-4"></div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card */}
          {[
            {
              icon: Phone,
              title: "Phone",
              text: ["+91 8420295770"],
              delay: 0.2,
            },
            {
              icon: Mail,
              title: "Email",
              text: ["donboscoberhampore@gmail.com"],
              delay: 0.4,
            },
            {
              icon: Clock,
              title: "Office Hours",
              text: ["Mon-Sat: 9 AM - 10 AM", "Sunday: Closed"],
              delay: 0.6,
            },
            {
              icon: MapPin,
              title: "Location",
              text: ["Panchanantala, Boaliadanga", "Berhampore, Murshidabad"],
              delay: 0.8,
            },
          ].map(({ icon: Icon, title, text, delay }, index) => (
            <motion.div
              key={index}
              custom={delay}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : ""}
              className="bg-gradient-to-tr from-[#4B0082] to-[#6A0DAD] p-6 rounded-lg shadow-lg transform group hover:scale-105 transition duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#1E1E1E] rounded-full p-4 transition group-hover:bg-purple-500">
                  <Icon className="h-6 w-6 text-white group-hover:animate-bounce" />
                </div>
                <div className="text-wrap overflow-hidden">
                  <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                  {text.map((line, i) => (
                    <p key={i} className="text-gray-300 break-words">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="h-[400px] rounded-lg overflow-hidden shadow-lg border-2 border-purple-500 hover:shadow-xl transition duration-300"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6235.864282254645!2d88.2690084!3d24.0961181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a12dcce0321ec69!2sDon+Bosco+School!5e1!3m2!1sen!2sin!4v1560967313686!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
