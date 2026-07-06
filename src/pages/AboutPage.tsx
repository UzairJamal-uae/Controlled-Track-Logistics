import WhyChooseUs from "@/src/components/WhyChooseUs";
import Stats from "@/src/components/Stats";
import { motion } from "motion/react";
import robo from "../assets/robo.png";

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="bg-black py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            Our Story
          </motion.h1>
            <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            With over 2 years of dedicated service, REAL LOGISTICS GROUP LLC has evolved from a local vision to a nationwide logistics powerhouse.
          </motion.p>
        </div>
      </section>

      <Stats />

      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-white">Driven by Excellence, <br /><span className="text-brand-accent">Defined by Trust.</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                CONTROLLED TRACK LOGISTICS is a dedicated truck dispatch company committed to helping small fleets keep their trucks moving. We believe every mile matters, We focus on securing quality loads, negotiating rates, and providing quality Dispatch.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our experienced dispatch team handles load booking, broker communication, route planning, and dispatch paperwork so you can stay focused on the road. Whether you're running one truck or managing a growing fleet, we're here to simplify your operations and help your business grow.
              </p>
            </div>
            <div className="relative">
              <img 
                src= {robo} 
                alt="Freight Logistics" 
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover border border-white/10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand p-8 rounded-2xl text-white shadow-xl">
                <p className="text-4xl font-black">2+</p>
                <p className="text-xs font-bold uppercase tracking-widest">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
    </main>
  );
}
