import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import securePaymentIcon from "/src/assets/secure-payment.png";
import serviceIcon from "/src/assets/service.png";
import supportIcon from "/src/assets/24-7-support.png";
import billTrackingIcon from "/src/assets/bill-tracking.png";

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
    icon: securePaymentIcon,
    title: "সিকিউর পেমেন্ট",
    desc: "আপনার সব লেনদেন ১০০% নিরাপদ",
  },
  {
    icon: serviceIcon,
    title: "তাৎক্ষণিক প্রসেসিং",
    desc: "নির্দিষ্ট সময়ের মধ্যে বিল প্রসেস হয়",
  },
  {
    icon: supportIcon,
    title: "২৪/৭ সাপোর্ট",
    desc: "যেকোনো সমস্যায় দ্রুত সমাধান",
  },
  {
    icon: billTrackingIcon,
    title: "বিল ট্র্যাকিং",
    desc: "আপনার সব বিলের হিসাব এক জায়গায়",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="mt-20 bg-gray-100 py-60">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-15 text-center text-3xl font-bold">
          আমাদের সার্ভিস সুবিধা !
        </h2>
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="hover:shadow-primary rounded-xl bg-white p-10 text-center shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="mx-auto mb-5 w-14"
              />
              <h4 className="mb-3 text-lg font-semibold">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
