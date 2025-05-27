import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const items = [
  {
    icon: "/src/assets/secure-payment.png",
    title: "সিকিউর পেমেন্ট",
    desc: "আপনার সব লেনদেন ১০০% নিরাপদ",
  },
  {
    icon: "/src/assets/service.png",
    title: "তাৎক্ষণিক প্রসেসিং",
    desc: "নির্দিষ্ট সময়ের মধ্যে বিল প্রসেস হয়",
  },
  {
    icon: "/src/assets/24-7-support.png",
    title: "২৪/৭ সাপোর্ট",
    desc: "যেকোনো সমস্যায় দ্রুত সমাধান",
  },
  {
    icon: "/src/assets/bill-tracking.png",
    title: "বিল ট্র্যাকিং",
    desc: "আপনার সব বিলের হিসাব এক জায়গায়",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="mt-20 py-60 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-15">
          আমাদের সার্ভিস সুবিধা
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="p-10 bg-white rounded-xl shadow-2xl text-center hover:scale-105 hover:shadow-primary transition-all duration-300"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="mx-auto mb-5 w-14"
              />
              <h4 className="font-semibold mb-3 text-lg">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
