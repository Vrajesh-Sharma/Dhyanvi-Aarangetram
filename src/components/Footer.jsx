import { Heart, Share2 } from 'lucide-react';

export default function Footer() {
  const shareOnWhatsapp = () => {
    window.open(`https://wa.me/?text=Join us for Dhyanvi's Aarangetram on 22nd February, this website: https://dhyanvi.vercel.app has all the details`, '_blank');
  };

  return (
    <footer className="bg-maroon-900 text-gold-400 py-8 border-t border-gold-400/30 relative z-20">
      <div className="max-w-md mx-auto px-6 text-center">
        <Heart className="w-6 h-6 mx-auto mb-3 animate-pulse text-gold-500" />
        
        <h2 className="font-serif text-xl mb-1 text-cream">With Love</h2>
        <p className="font-sans text-sm text-white/80 mb-6">The Sharma Family</p>
        
        <button 
          onClick={shareOnWhatsapp} 
          className="inline-flex items-center gap-2 px-5 py-2 border border-gold-400/50 rounded-full text-sm hover:bg-gold-400 hover:text-maroon-900 transition-colors"
        >
          <Share2 className="w-4 h-4" /> 
          <span>Share Invitation</span>
        </button>
        
        <div className="mt-8 pt-4 border-t border-white/10">
          <p className="text-[10px] text-white/30 uppercase tracking-widest">
            Designed by Vrajesh Sharma
          </p>
        </div>
      </div>
    </footer>
  );
}