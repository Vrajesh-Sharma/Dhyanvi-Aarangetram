import { motion } from 'framer-motion';

export default function Journey() {
  const moments = [
    { year: "The Beginning", text: "Stepping into the classroom for the first time, confused but captivated by the sound of ghungroos." },
    { year: "The Struggle", text: "Balancing academics with rigorous practice. The blistered feet, the fatigue, and the moments of wanting to give up." },
    { year: "The Breakthrough", text: "Understanding that dance isn't just steps, but emotion. The first time she truly felt the character she was portraying." },
    { year: "The Ascent", text: "Today, she stands ready. Not perfect, but persistent. A result of years of sweat and sacrifice." }
  ];

  // REPLACE these with your real file names
  const galleryImages = [
    "6D1A2771.JPG", 
    "6D1A3025.JPG", // Add your other real image names here
    "Krishna.JPG",
    "6D1A2775.JPG", 
    "6D1A2777.JPG", 
    "6D1A2798.JPG",
    "6D1A3106.JPG", 
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-16 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        
        {/* --- SECTION 1: THE COLLAGE (NOW FIRST) --- */}
        <div className="mb-24">
            <h1 className="font-serif text-4xl md:text-5xl text-maroon-900 text-center mb-12">Glimpses of Practice</h1>
            
            {/* Masonry Layout */}
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {galleryImages.map((imgName, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="break-inside-avoid rounded-lg overflow-hidden shadow-lg"
                >
                  <img 
                    src={`/images/${imgName}`} 
                    alt={`Journey Moment ${index + 1}`} 
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              ))}
            </div>
        </div>

        {/* --- SECTION 2: THE STORY (NOW SECOND) --- */}
        <h2 className="font-serif text-3xl md:text-4xl text-maroon-900 text-center mb-12">The Path to Arangetram</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Featured Image */}
          <div className="relative h-full min-h-[400px] order-2 md:order-1">
             <img 
               src="/images/Krishna.JPG" 
               alt="Journey Highlight" 
               className="w-full h-full object-cover rounded-xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" 
             />
          </div>

          {/* Text Timeline */}
          <div className="space-y-8 order-1 md:order-2">
            {moments.map((moment, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="pl-6 border-l-2 border-gold-400"
              >
                <h3 className="font-serif text-2xl text-maroon-800 mb-2">{moment.year}</h3>
                <p className="font-sans text-gray-700 italic">{moment.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}