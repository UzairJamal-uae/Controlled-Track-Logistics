import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How does your dispatch service work?",
    answer: "Once you join our dispatch service, you'll be assigned a dedicated dispatcher who searches for the best available loads, negotiates rates with brokers, handles all communications, plans efficient routes, and sends load confirmations directly to you. Our goal is to keep your truck moving while you focus on driving.",
  },
  {
    question: "Do you work with owner-operators and small fleets?",
    answer: "Yes. We work with independent owner-operators as well as small and growing trucking companies. Whether you operate one truck or multiple trucks, our dispatch solutions are customized to fit your business needs.",
  },
  {
    question: "How do you find the best-paying loads?",
    answer: "Our dispatchers monitor multiple load boards, maintain broker relationships, compare available freight, and negotiate competitive rates to help maximize your revenue while reducing empty miles.",
  },
  {
    question: "Can I choose the loads I want to haul?",
    answer: "Absolutely. We never force-load our carriers. Every load is presented for your approval before booking, giving you complete control over your schedule, preferred lanes, and freight type.",
  },
  {
    question: "What types of freight do you dispatch?",
    answer: "We dispatch Dry Van, Reefer, Flatbed, Power Only, Partial Loads, Expedited Freight, Box Trucks, and other equipment depending on your operating authority and preferences.",
  },
];

export default function ProblemSolution() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand font-bold uppercase tracking-[0.2em] text-xs mb-4">Common Questions</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight font-sans">Carriers & Shippers FAQ</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-100 last:border-0"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight group-hover:text-brand-accent transition-colors">
                  {faq.question}
                </span>
                <div className="ml-4 shrink-0">
                  {activeIndex === index ? (
                    <Minus className="h-6 w-6 text-brand" />
                  ) : (
                    <Plus className="h-6 w-6 text-brand" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-gray-500 text-lg leading-relaxed max-w-3xl font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
