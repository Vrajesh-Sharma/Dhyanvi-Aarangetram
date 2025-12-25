import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Share2, Navigation, Heart } from 'lucide-react';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function App() {

  // --- HELPER FUNCTIONS ---
  const addToCalendar = () => {
    const title = "Arangetram: Dhyanvi Sharma"; // Updated placeholder
    const details = "Join us for the Bharatanatyam Arangetram.";
    const location = "Shyama Prasad Mukherjee Auditorium, RTO Road, Ahmedabad";
    const start = "20260222T023000Z"; 
    const end = "20260222T063000Z";
    
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}&dates=${start}/${end}`;
    window.open(url, '_blank');
  };

  const shareOnWhatsapp = () => {
    const text = "We cordially invite you to the Arangetram on Feb 22, 2026. View invitation: https://vrajesharma.vercel.app/";
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="overflow-x-hidden bg-cream selection:bg-maroon-800 selection:text-gold-400">
      
      {/* --- 1. HERO SECTION --- */}
      {/* Added bg-maroon-900 as a fallback color so text is visible even if image loads slowly */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden bg-maroon-900">
        
        {/* Parallax Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ 
            // USING ONE OF YOUR UPLOADED IMAGES HERE
            backgroundImage: "url('/images/6D1A2798.JPG')", 
            // Increased darkness (brightness 0.4) to make white text pop
            filter: "brightness(0.4) sepia(0.3)" 
          }}
        />
        
        <div className="relative z-10 text-cream max-w-4xl mx-auto">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="flex flex-col items-center gap-6"
          >
            <motion.p variants={fadeInUp} className="text-gold-400 font-serif text-sm tracking-[0.2em] uppercase">
              || Shree Ganeshay Namah ||
            </motion.p>
            
            <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white drop-shadow-lg">
              Dhyanvi <br /> Sharma
            </motion.h1>

            <motion.div variants={fadeInUp} className="w-24 h-1 bg-gold-400 my-2" />

            <motion.h2 variants={fadeInUp} className="font-sans text-xl md:text-2xl font-light tracking-widest uppercase text-cream/90">
              Ascending the Stage | Arangetram
            </motion.h2>

            <motion.div variants={fadeInUp} className="mt-4 flex flex-col md:flex-row items-center gap-2 md:gap-6 text-lg font-light text-cream">
              <span className="flex items-center gap-2"><Calendar className="w-5 h-5 text-gold-400" /> Feb 22, 2026</span>
              <span className="hidden md:block text-gold-400">•</span>
              <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-gold-400" /> 08:00 AM</span>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex gap-4 mt-8">
              <button 
                onClick={addToCalendar}
                className="px-6 py-3 bg-gold-400 text-maroon-900 font-serif font-bold rounded hover:bg-white transition-colors duration-300 shadow-lg shadow-gold-400/20"
              >
                Add to Calendar
              </button>
              <a 
                href="#venue"
                className="px-6 py-3 border border-gold-400 text-gold-400 font-serif font-bold rounded hover:bg-gold-400 hover:text-maroon-900 transition-colors duration-300 backdrop-blur-sm"
              >
                View Location
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-400"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gold-400 to-transparent mx-auto"></div>
        </motion.div>
      </section>

      {/* --- 2. INTRODUCTION --- */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="order-2 md:order-1"
          >
            <h3 className="font-serif text-3xl md:text-4xl text-maroon-800 mb-6">The Journey</h3>
            <p className="font-sans text-lg text-gray-600 leading-relaxed mb-4">
              Arangetram is not just a performance; it is the culmination of years of dedication, discipline, and devotion. It marks the dancer's ascent to the stage, transforming from a student into a performer capable of interpreting the divine nuances of Bharatanatyam.
            </p>
            <p className="font-sans text-lg text-gray-600 leading-relaxed">
              We invite you to witness this milestone as she offers her first full repertoire to the Guru, the Divine, and the Audience.
            </p>
            <div className="mt-8">
              <p className="font-serif text-xl text-maroon-900 italic">- The Sharma Family</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 relative"
          >
            <div className="absolute -inset-4 border-2 border-gold-400/30 rounded-full md:rounded-tl-[100px] md:rounded-br-[100px] -z-10"></div>
            <img 
              src="/images/6D1A2771.JPG" // USING YOUR PORTRAIT IMAGE HERE
              alt="Dancer Portrait" 
              className="w-full h-auto rounded-lg shadow-2xl md:rounded-tl-[80px] md:rounded-br-[80px]"
            />
          </motion.div>
        </div>
      </section>

      {/* --- 3. THE SCHEDULE --- */}
      <section className="py-20 bg-maroon-900 text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#D4AF37 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.h3 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="font-serif text-3xl md:text-4xl text-center text-gold-400 mb-16"
          >
            Order of Events
          </motion.h3>

          <div className="space-y-12 border-l-2 border-gold-400/30 ml-4 md:ml-0 pl-8 md:pl-0">
            {[
              { time: "08:00 AM", title: "Deep Pragatya & Prayer", desc: "Invoking blessings" },
              { time: "08:30 AM", title: "Recital Begins", desc: "Pushpanjali, Alarippu, Jatiswaram..." },
              { time: "12:00 PM", title: "Mangalam", desc: "The Finale" },
              { time: "12:30 PM", title: "Priti Bhojan", desc: "Please join us for lunch" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative md:flex md:justify-between md:items-center group"
              >
                <div className="absolute -left-[39px] md:left-1/2 md:-ml-[5px] top-1 w-5 h-5 bg-gold-400 rounded-full border-4 border-maroon-900 z-10"></div>
                
                <div className="md:w-[45%] md:text-right md:pr-12 mb-2 md:mb-0">
                  <span className="font-serif text-gold-400 text-xl font-bold">{item.time}</span>
                </div>
                <div className="md:w-[45%] md:pl-12">
                  <h4 className="font-serif text-2xl text-white">{item.title}</h4>
                  <p className="text-gray-400 font-sans">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. VENUE (RTO) --- */}
      <section id="venue" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="font-serif text-3xl md:text-4xl text-maroon-800 mb-4">The Venue</h3>
          <p className="text-maroon-800/70 max-w-2xl mx-auto italic">
            Please Note: There are two auditoriums with similar names. <br/>
            <strong>We are at the RTO Road location.</strong>
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-3">
            <div className="p-8 md:col-span-1 bg-cream flex flex-col justify-center gap-6">
              <div>
                <h4 className="font-serif text-xl font-bold text-maroon-800 mb-2">Shyama Prasad Mukherjee Auditorium</h4>
                <p className="flex items-start gap-2 text-gray-600">
                  <MapPin className="w-5 h-5 mt-1 text-maroon-800 shrink-0" />
                  <span>RTO Road,<br/>Ahmedabad, Gujarat</span>
                </p>
              </div>
              
              <div className="bg-gold-400/10 p-4 rounded-lg border border-gold-400/20">
                <p className="text-sm text-maroon-900 font-semibold">
                  🚗 Ample Parking Available
                </p>
                <p className="text-xs text-gray-600 mt-1">Capacity: 2000+ Vehicles</p>
              </div>

              <a 
                href="https://www.google.com/maps/search/?api=1&query=Shyama+Prasad+Mukherjee+Auditorium+RTO+Road+Ahmedabad"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-maroon-800 text-white rounded hover:bg-maroon-900 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>

            <div className="md:col-span-2 h-80 md:h-auto bg-gray-200">
              <iframe 
                title="Venue Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5358686120286!2d72.5664!3d23.0772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bbcdb%3A0x4f4d2212d26d2319!2sShyama%20Prasad%20Mukherjee%20Auditorium!5e0!3m2!1sen!2sin!4v1703534000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. GALLERY --- */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-serif text-3xl md:text-4xl text-maroon-800 text-center mb-12">Moments in Motion</h3>
          
          <div className="columns-1 md:columns-3 gap-4 space-y-4 mx-auto">
            {/* Using your actual images here. Note the uppercase JPG */}
            {["6D1A2775.JPG", "6D1A2777.JPG", "6D1A2798.JPG"].map((img, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.02 }}
                className="break-inside-avoid rounded-lg overflow-hidden shadow-lg"
              >
                <img 
                  src={`/images/${img}`} 
                  alt="Dance Pose" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. FOOTER --- */}
      <footer className="bg-maroon-900 text-gold-400 py-12 text-center">
        <div className="max-w-md mx-auto px-6">
          <Heart className="w-8 h-8 mx-auto mb-4 animate-pulse" />
          <h2 className="font-serif text-2xl mb-2">With Love</h2>
          <p className="font-sans text-white mb-8">The Sharma Family</p>
          
          <button 
            onClick={shareOnWhatsapp}
            className="flex items-center justify-center gap-2 mx-auto px-6 py-2 border border-gold-400 rounded-full hover:bg-gold-400 hover:text-maroon-900 transition-colors"
          >
            <Share2 className="w-4 h-4" /> Share Invitation
          </button>
          
          <p className="text-xs text-white/30 mt-12 font-sans">
            Designed by Vrajesh Sharma
          </p>
        </div>
      </footer>
    </div>
  );
}