import { motion } from 'framer-motion';

export default function Timeline() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="py-20 bg-cream min-h-screen" // Changed from bg-maroon-900
    >
       <h1 className="font-serif text-4xl text-center text-maroon-900 mb-16">Program Schedule</h1>
       
       <div className="max-w-3xl mx-auto px-6 space-y-12 border-l-2 border-gold-400/50 ml-4 md:ml-auto pl-8 md:pl-0">
          {[
            { time: "08:00 AM", title: "Deep Pragatya & Prayer" },
            { time: "08:30 AM", title: "Recital Begins" },
            { time: "12:00 PM", title: "Mangalam (Finale)" },
            { time: "12:30 PM", title: "Priti Bhojan (Lunch)" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative md:flex md:justify-between md:items-center"
            >
              {/* Dot adjustment: Border is now cream to match bg */}
              <div className="absolute -left-[39px] md:left-1/2 md:-ml-[5px] top-1 w-5 h-5 bg-gold-400 rounded-full border-4 border-cream z-10 shadow-sm"></div>
              
              <div className="md:w-[45%] md:text-right md:pr-12">
                <span className="font-serif text-maroon-800 text-xl font-bold">{item.time}</span>
              </div>
              
              <div className="md:w-[45%] md:pl-12">
                <h4 className="font-serif text-2xl text-maroon-900">{item.title}</h4>
              </div>
            </motion.div>
          ))}
       </div>
    </motion.div>
  );
}