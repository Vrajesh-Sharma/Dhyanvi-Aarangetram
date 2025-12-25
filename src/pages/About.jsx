import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="py-12 px-6 max-w-6xl mx-auto"
    >
      <h1 className="font-serif text-4xl md:text-5xl text-maroon-800 text-center mb-16">The Artist & The Art</h1>
      
      {/* Section 1: Dhyanvi */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="order-2 md:order-1">
          <h2 className="font-serif text-3xl text-gold-500 mb-4">Meet Dhyanvi</h2>
          <p className="font-sans text-lg text-gray-700 leading-relaxed mb-4">
            Graceful, determined, and deeply connected to her roots. For Dhyanvi, dance is not just movement; it is a form of prayer. 
          </p>
          <p className="font-sans text-lg text-gray-700 leading-relaxed">
             Starting at a young age, she found solace in the rhythm of the Tatkaar and the expression of Abhinaya. This performance is a testament to her love for the art form.
          </p>
        </div>
        <div className="order-1 md:order-2">
            <img src="/images/6D1A2771.JPG" alt="Dhyanvi" className="rounded-lg shadow-2xl border-4 border-gold-400/20 rotate-2 hover:rotate-0 transition-transform duration-500" />
        </div>
      </div>

      {/* Section 2: What is Arangetram */}
      <div className="bg-maroon-900 text-cream p-8 md:p-12 rounded-2xl shadow-xl">
        <h2 className="font-serif text-3xl text-gold-400 mb-6 text-center">What is Arangetram?</h2>
        <div className="md:columns-2 gap-8 font-sans text-lg leading-relaxed space-y-4">
          <p>
            'Arangetram' literally translates to "ascending the stage" (Arangu = Stage, Etram = Ascent). It is the debut solo performance of a classical dancer, signifying the completion of their initial training.
          </p>
          <p>
            It is a graduation ceremony where the dancer presents a full repertoire—ranging from pure rhythmic dance (Nritta) to expressive storytelling (Abhinaya).
          </p>
          <p>
            This milestone marks the transition from a student to a performer, capable of carrying the legacy of this ancient art form forward.
          </p>
        </div>
      </div>
    </motion.div>
  );
}