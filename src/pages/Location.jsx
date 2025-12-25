// import { motion } from 'framer-motion';
// import { MapPin, Navigation } from 'lucide-react';

// export default function Location() {
//   return (
//     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-16 px-4 max-w-6xl mx-auto">
//         <h1 className="font-serif text-4xl text-center text-maroon-800 mb-8">The Venue</h1>
        
//         <div className="grid md:grid-cols-3 gap-8 bg-white rounded-xl shadow-2xl overflow-hidden">
//             <div className="p-8 md:col-span-1 bg-maroon-50 flex flex-col justify-center gap-6">
//                 <h3 className="font-serif text-2xl text-maroon-900 font-bold">Shyama Prasad Mukherjee Auditorium</h3>
//                 <p className="text-gray-600"><MapPin className="inline w-5 h-5 mr-2"/> RTO Road, Ahmedabad</p>
//                 <div className="bg-white p-4 rounded shadow-sm border border-gold-200">
//                     <p className="text-sm font-bold text-maroon-800">NOTE:</p>
//                     <p className="text-xs text-gray-500">Ensure you navigate to the RTO Road location, not the other auditorium.</p>
//                 </div>
//                 <a href="https://maps.app.goo.gl/cufiV4gDQL2ggVTp9" target="_blank" className="bg-maroon-800 text-white text-center py-3 rounded hover:bg-maroon-900 transition">
//                     <Navigation className="inline w-4 h-4 mr-2" /> Get Directions
//                 </a>
//             </div>
//             <div className="md:col-span-2 h-96 bg-gray-200">
//                  <iframe 
//                     title="Map"
//                     src="https://maps.app.goo.gl/cufiV4gDQL2ggVTp9" 
//                     width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
//                   ></iframe>
//             </div>
//         </div>
//     </motion.div>
//   );
// }

import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-16 px-4 max-w-6xl mx-auto">
        <h1 className="font-serif text-4xl text-center text-maroon-800 mb-8">The Venue</h1>
        
        <div className="grid md:grid-cols-3 gap-8 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
            
            {/* Details Panel */}
            <div className="p-8 md:col-span-1 bg-cream flex flex-col justify-center gap-6">
                <h3 className="font-serif text-2xl text-maroon-900 font-bold">Shyama Prasad Mukherjee Auditorium</h3>
                <p className="text-gray-600 flex items-center">
                    <MapPin className="inline w-5 h-5 mr-2 text-gold-500"/> 
                    RTO Road, Vastral, Ahmedabad
                </p>
                
                <div className="bg-white p-4 rounded shadow-sm border border-gold-200">
                    <p className="text-sm font-bold text-maroon-800 flex items-center gap-2">
                        ⚠️ IMPORTANT NOTE:
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                        Please ensure you navigate to the <strong>RTO Road</strong> location. There is another auditorium with a similar name in the city.
                    </p>
                </div>

                <a 
                    href="https://www.google.com/maps/dir//Shyama+Prasad+Mukherjee+Auditorium,+RTO+Road,+Ahmedabad" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-maroon-800 text-white text-center py-3 rounded hover:bg-maroon-900 transition flex items-center justify-center gap-2"
                >
                    <Navigation className="w-4 h-4" /> Get Directions
                </a>
            </div>

            {/* Map Embed Panel */}
            <div className="md:col-span-2 h-96 md:h-auto bg-gray-200 relative">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3706.4283178657793!2d72.65625147525712!3d22.98883291758655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e873ed3a095c5%3A0x7408ee88447acd9f!2sShyama%20Prasad%20Mukherjee%20Auditorium!5e1!3m2!1sen!2sin!4v1766691423973!5m2!1sen!2sin"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shyama Prasad Mukherjee Auditorium Map"
                 ></iframe>
            </div>
        </div>
    </motion.div>
  );
}