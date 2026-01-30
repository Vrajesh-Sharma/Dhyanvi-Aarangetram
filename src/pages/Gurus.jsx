import { motion } from 'framer-motion';

const teachers = [
  { name: "Khamma Parag Shah", role: "Main Choreographer", img: "/images/Khamma_maam.jpeg" },
  { name: "Neel Soni", role: "Nattuvangam", img: "/images/Neel_maam.jpeg" },
  { name: "Singer", role: "Saumya Nedungadi", img: "https://via.placeholder.com/300" },
  { name: "Violin", role: "Prem Menon", img: "https://via.placeholder.com/300" },
  { name: "Mrudang", role: "Anant Menon", img: "https://via.placeholder.com/300" },
  { name: "Flute", role: "Rajendran Nair", img: "https://via.placeholder.com/300" },
];

export default function Gurus() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-16 px-6 max-w-7xl mx-auto text-center">
      <h1 className="font-serif text-4xl md:text-5xl text-maroon-800 mb-4">Guiding Lights</h1>
      <p className="font-sans text-gray-600 mb-16 max-w-2xl mx-auto">
        "Guru Brahma, Guru Vishnu..." <br/>
        This journey would have been impossible without the relentless guidance, patience, and blessings of her Gurus.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {teachers.map((t, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-gold-400">
               {/* Use real images here when you have them */}
               <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-serif text-2xl text-maroon-900">{t.name}</h3>
            <p className="font-sans text-gold-500 font-semibold uppercase tracking-wider text-sm mt-2">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}