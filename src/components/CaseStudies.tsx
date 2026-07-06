import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const CASE_STUDIES = [
  {
    id: 1,
    title: "Nationwide Retail Distribution",
    client: "Treston Transportation LLC",
    description: "Helped a solo owner-operator increase weekly revenue by securing high-paying loads, minimizing deadhead miles, and providing 24/7 dispatch support across multiple states.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Specialized Load Coordination",
    client: "Fresh Produce Co.",
    description: "Managed specialized freight dispatch with careful route planning, appointment scheduling, and broker coordination to ensure timely deliveries and maximum earnings.",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Scaling a 5-Truck Fleet",
    client: "Triple A Trucking INC",
    description: "Provided dedicated dispatching, broker communication, paperwork management, and load planning that helped a growing fleet keep every truck moving consistently.",
    image: "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&q=80",
  },
];

export default function CaseStudies() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % CASE_STUDIES.length);
  const prev = () => setCurrent((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-brand font-bold uppercase tracking-widest text-sm mb-4">Success Stories</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900">Helping Carriers to Stay Loaded</h3>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={prev}
              className="p-4 rounded-full border border-gray-200 text-slate-900 hover:bg-brand hover:border-brand hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={next}
              className="p-4 rounded-full border border-gray-200 text-slate-900 hover:bg-brand hover:border-brand hover:text-white transition-all shadow-sm"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-video lg:aspect-square border border-gray-100 shadow-xl">
                <img 
                   src={CASE_STUDIES[current].image} 
                   alt={CASE_STUDIES[current].title}
                   className="w-full h-full object-cover"
                   referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent" />
              </div>

              <div className="space-y-8 p-4">
                <Quote className="h-16 w-16 text-brand opacity-20" />
                <div>
                  <p className="text-brand font-black uppercase tracking-widest text-xs mb-3">Case Study #{CASE_STUDIES[current].id}</p>
                  <h4 className="text-4xl font-black text-slate-900 mb-6 leading-tight">{CASE_STUDIES[current].title}</h4>
                  <p className="text-xl text-gray-500 leading-relaxed font-medium">
                    "{CASE_STUDIES[current].description}"
                  </p>
                </div>
                
                <div className="pt-8 border-t border-gray-100 flex items-center space-x-6">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-black mb-1">Impacted Client</p>
                    <p className="text-slate-900 font-black text-xl">{CASE_STUDIES[current].client}</p>
                  </div>
                </div>

                <button className="text-brand font-black flex items-center space-x-2 group">
                  <span className="border-b-2 border-transparent group-hover:border-brand transition-all pb-1">Read Full Case Study</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
