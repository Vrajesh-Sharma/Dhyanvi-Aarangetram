import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="py-12 px-6 max-w-6xl mx-auto"
    >
      <h1 className="font-serif text-4xl md:text-5xl text-maroon-800 text-center mb-16">The Artist & The Art</h1>
      
      {/* Section 1: Dhyanvi */}
      <div className="order-2 md:order-1">
        <h2 className="font-serif text-3xl text-gold-500 mb-4">Meet Dhyanvi</h2>
        <p className="font-sans text-lg text-gray-700 leading-relaxed mb-4">
          For Dhyanvi, Bharatanatyam is not merely a dance form, it is a sacred sadhana. 
          Guided by her Guru and supported wholeheartedly by her family, she began 
          this beautiful journey at a young age of 5, embracing discipline, devotion, and grace.
        </p>
        <p className="font-sans text-lg text-gray-700 leading-relaxed mb-4">
          What started as learning steps and rhythm slowly blossomed into a deep spiritual 
          connection with the art. Through years of dedicated practice, she has grown not 
          only as a dancer but as a seeker of expression and tradition.
        </p>
        <p className="font-sans text-lg text-gray-700 leading-relaxed">
          This Arangetram marks the completion of her initial training, a moment where 
          she offers her art with humility and devotion to the divine, and steps forward 
          from a student into a true performer of this timeless heritage.
        </p>
      </div>

      <br>
      </br>

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