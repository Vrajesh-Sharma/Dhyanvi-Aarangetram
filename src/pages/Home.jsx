import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

export default function Home() {
  const addToCalendar = () => {
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Arangetram: Dhyanvi Sharma&details=Join us for the Bharatanatyam Arangetram.&location=Shyama Prasad Mukherjee Auditorium, RTO Road, Ahmedabad&dates=20260222T023000Z/20260222T063000Z`;
    window.open(url, '_blank');
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-maroon-900">
      
      {/* --- BACKGROUND IMAGE HANDLING --- */}
      <div className="absolute inset-0">
        <img 
          src="/images/Dhyanvi.JPG" 
          alt="Dhyanvi Arangetram"
          className="w-full h-full object-cover object-top opacity-90"
        />
        {/* Gradient Overlay: Dark at bottom to make text pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-900/30 via-transparent to-maroon-900/90" />
        <div className="absolute inset-0 bg-black/30" /> {/* Increased dimmer slightly for better text contrast */}
      </div>

      {/* --- HERO CONTENT --- */}
      <div className="relative z-10 h-full flex flex-col items-center justify-end md:justify-center text-center px-4 pb-20 md:pb-0">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-5xl"
        >
          {/* Invocation - INCREASED SIZE */}
          <p className="text-gold-400 font-serif text-base md:text-5xl font-semibold tracking-[0.3em] uppercase mb-4 md:mb-6 drop-shadow-md">
            || Shree Ganeshay Namah ||
          </p>
          
          {/* Name */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-bold text-white drop-shadow-xl mb-2 tracking-tight">
            Dhyanvi Sharma
          </h1>

          {/* Divider */}
          <div className="w-16 md:w-24 h-[2px] bg-gold-500 mx-auto my-6 shadow-[0_0_10px_#D4AF37]" />

          {/* Subtitle - INCREASED SIZE */}
          <h2 className="text-gold-400 font-sans text-2xl md:text-4xl font-light tracking-[0.25em] uppercase text-gold-200 mb-8 md:mb-12 text-shadow-sm">
            Aarangetram
          </h2>

          {/* Details Pill */}
          <div className="inline-flex flex-col md:flex-row items-center gap-3 md:gap-8 bg-maroon-900/60 backdrop-blur-md border border-white/10 px-8 py-4 rounded-lg mb-8 shadow-xl">
             <div className="flex items-center gap-2 text-cream">
                <Calendar className="w-6 h-6 text-gold-400" />
                <span className="text-xl font-medium">Feb 22, 2026</span>
             </div>
             <div className="hidden md:block w-[1px] h-6 bg-white/20"></div>
             <div className="flex items-center gap-2 text-cream">
                <MapPin className="w-6 h-6 text-gold-400" />
                <span className="text-xl font-medium">Ahmedabad</span>
             </div>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center w-full max-w-sm md:max-w-none mx-auto">
            <button 
              onClick={addToCalendar}
              className="px-8 py-4 bg-gold-500 text-maroon-900 font-serif font-bold text-lg rounded shadow-lg hover:bg-white transition-all duration-300"
            >
              Add to Calendar
            </button>
            <a 
              href="/location"
              className="px-8 py-4 border-2 border-gold-400 text-gold-400 font-serif font-bold text-lg rounded backdrop-blur-sm hover:bg-gold-400 hover:text-maroon-900 transition-all duration-300"
            >
              View Location
            </a>
          </div>

        </motion.div>
      </div>
    </div>
  );
}