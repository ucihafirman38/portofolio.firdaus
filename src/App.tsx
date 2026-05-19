/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  BarChart3, 
  Video, 
  Mic2, 
  Gamepad2, 
  ArrowRight, 
  ExternalLink, 
  Menu, 
  X, 
  Github, 
  Instagram, 
  Twitter,
  ChevronDown,
  Mail
} from 'lucide-react';
import { Project, MediaCategory } from './types';

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Poster: Generasi Muda Pelestari Budaya',
    description: 'Poster edukatif yang mengajak generasi muda untuk aktif melestarikan kekayaan budaya Indonesia melalui visual yang menarik.',
    category: 'Poster',
    thumbnail: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwhb_EssJ9f5IsLot3lEF3Jq5O6_xIzDNeVTWBZGhQg-nQPcWh8y_pmzoC2mauRr8W_EgTREXz70nMirgeqrWgNswbixXlXkk6WFdjUBZGhEasev7hEVZJ9f1bNOpK4HNyst4AywN3NmDoXKr93Hve5S9BEtmuVFXXoR7IEc4daWrwg0vS6mmtnPip8Q/s7016/poster%20budaya.png',
    mediaUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwhb_EssJ9f5IsLot3lEF3Jq5O6_xIzDNeVTWBZGhQg-nQPcWh8y_pmzoC2mauRr8W_EgTREXz70nMirgeqrWgNswbixXlXkk6WFdjUBZGhEasev7hEVZJ9f1bNOpK4HNyst4AywN3NmDoXKr93Hve5S9BEtmuVFXXoR7IEc4daWrwg0vS6mmtnPip8Q/s7016/poster%20budaya.png',
    year: '2025',
    tags: ['Budaya', 'Edukasi', 'Visual']
  },
  {
    id: '2',
    title: 'Infografis: Fungsi Organ Dalam Manusia',
    description: 'Visualisasi data mengenai sistem organ dalam manusia dan fungsinya masing-masing dalam menjaga kesehatan tubuh.',
    category: 'Infografis',
    thumbnail: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9MxvkwtaklcdNRqKm_-1i-IFXF25gLKkkEPDJsRXOkPM_LfHvZdRtKm5fLpdv17Vgb-5DEFD9eyMlQia8Ki0qKFXJt-IK3FqkwGYGC7HR9hr3r31bsFHNrecaYosCgD_mzgltkEQUFUjsEORC_8u3OayQ0RttBn-k-neUBq0S55WhDxZreELO9ElX8g/s7016/poster%20fungsi%20oragan%20dalam.png',
    mediaUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9MxvkwtaklcdNRqKm_-1i-IFXF25gLKkkEPDJsRXOkPM_LfHvZdRtKm5fLpdv17Vgb-5DEFD9eyMlQia8Ki0qKFXJt-IK3FqkwGYGC7HR9hr3r31bsFHNrecaYosCgD_mzgltkEQUFUjsEORC_8u3OayQ0RttBn-k-neUBq0S55WhDxZreELO9ElX8g/s7016/poster%20fungsi%20oragan%20dalam.png',
    year: '2025',
    tags: ['Sains', 'SD', 'Organ Dalam']
  },
  {
    id: '3',
    title: 'Video Eksplainer: Misteri Munculnya Anak Hewan',
    description: 'Video edukasi singkat yang mengungkap misteri di balik proses perbanyakan diri atau kelahiran berbagai jenis spesies hewan secara menarik.',
    category: 'Video',
    thumbnail: 'https://img.youtube.com/vi/vh0RdHwN7Jk/maxresdefault.jpg',
    mediaUrl: 'https://www.youtube.com/embed/vh0RdHwN7Jk',
    year: '2025',
    tags: ['Sains', 'Hewan', 'Shorts']
  },
  {
    id: '4',
    title: 'Podcast: Detektif Alam - Kelahiran Bayi Hewan',
    description: 'Bincang santai yang mengamati dan menjelaskan bagaimana proses munculnya bayi hewan ke dunia dari perspektif pengamatan alam.',
    category: 'Podcast',
    thumbnail: 'https://img.youtube.com/vi/rgeSR0RLJv4/maxresdefault.jpg',
    mediaUrl: 'https://www.youtube.com/embed/rgeSR0RLJv4',
    year: '2025',
    tags: ['Audio', 'Sains', 'Alam']
  },
  {
    id: '5',
    title: 'Game Online: Gimkit Edukasi',
    description: 'Platform permainan interaktif untuk mengulang materi pembelajaran dengan cara yang menyenangkan dan kompetitif.',
    category: 'Game',
    thumbnail: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=1000',
    mediaUrl: 'https://www.gimkit.com/me',
    year: '2025',
    tags: ['Gamifikasi', 'Gimkit', 'Interaktif']
  },
  {
    id: '6',
    title: 'Game Online: Kuis ZEP Interaktif',
    description: 'Tantangan kuis interaktif di platform ZEP untuk menguji pemahaman konten pembelajaran melalui simulasi menarik.',
    category: 'Game',
    thumbnail: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&q=80&w=1000',
    mediaUrl: 'https://quiz.zep.us/id/play/0EzrMp',
    year: '2025',
    tags: ['Kuis', 'ZEP', 'Web']
  }
];

const CategoryIcon = ({ category, className, size = 20 }: { category: MediaCategory; className?: string; size?: number }) => {
  switch (category) {
    case 'Poster': return <FileText className={className} size={size} />;
    case 'Infografis': return <BarChart3 className={className} size={size} />;
    case 'Video': return <Video className={className} size={size} />;
    case 'Podcast': return <Mic2 className={className} size={size} />;
    case 'Game': return <Gamepad2 className={className} size={size} />;
    default: return <FileText className={className} size={size} />;
  }
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMedia = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Header / Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-display font-bold tracking-tight text-blue-600"
          >
            archive media digital<span className="text-slate-900">.firdaus</span>
          </motion.div>

          <div className="hidden md:flex gap-8 items-center">
            {['Beranda', 'Tentang', 'Portofolio', 'Kontak'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href="#portofolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Mulai Eksplorasi
            </motion.a>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {['Beranda', 'Tentang', 'Portofolio', 'Kontak'].map((item) => (
                  <a key={item} href="#" className="text-lg font-medium text-slate-900 py-2 hover:text-blue-600">
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden grid-pattern">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-blue-50/50 to-white/0 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              Tersedia Untuk Proyek Edukasi
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 mb-6 leading-[1.1]"
            >
              Membangun Pembelajaran Bermakna <br />
              <span className="text-blue-600">Melalui Media Digital</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 mb-8 max-w-xl mx-auto md:mx-0 font-medium"
            >
              Halo, saya seorang calon pendidik yang berfokus pada integrasi teknologi informasi 
              dalam pembelajaran sekolah dasar. Inilah arsip karya literasi TIK saya.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a href="#portofolio" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:shadow-xl hover:shadow-blue-200 transition-all flex items-center justify-center gap-2 group">
                Lihat Proyek <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex gap-4 items-center justify-center px-4">
                 <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Follow me:</span>
                 <div className="flex gap-3">
                   <a href="https://www.instagram.com/frdsm.a_?igsh=MW52a3Q0eWR0aHI1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"><Instagram size={18} /></a>
                   <a href="mailto:firdausmusaddadasyifa@upi.edu" className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"><Mail size={18} /></a>
                 </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', damping: 20 }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="https://blogger.googleusercontent.com/img/a/AVvXsEhR7j6Oi28VbiaLk08GQ29bjxvrwkKS-x8b-j9jFsmZ3FUOdwpkpFSNjgMWe2Jo6d4xfXCnWDhB8y55X4q4rLESPd_D5lu7hAcoH12-zG9WFjvDHygsZlqwoN4suloevMUiIoHcgHzzmbEzVTZ5frXA8VMwcjRwpEmLH1Xmr-8aYgqXlgR2eMv2f7c9Ug" 
                alt="Profile" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-blue-900/40 to-transparent opacity-60" />
              
              {/* Floating Label - Larger & Left-Anchored Aesthetic */}
              <div className="absolute bottom-16 left-0 p-4 pr-8 bg-white/95 backdrop-blur-md rounded-r-3xl shadow-[20px_0_50px_rgba(0,0,0,0.15)] border-y border-r border-white/40 hidden md:block w-fit hover:pl-6 transition-all duration-300 group/badge">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center p-2 shadow-sm border border-slate-50 shrink-0 group-hover/badge:scale-110 transition-transform">
                    <img 
                      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdkOR6FhX4byihYwCuLIn79W0YSys5eALwc7VSHgY230kiHivpjPW0RABQZYnJF58v_sdFVzRPx4DwCCaU7qB_3KlMHpBb8WN5S74O-jXQogk6Y8FhdWjVQB7dfGxvPy4bTtSn66TnjM0GiTrULElDph6QDDgITPcIgWt-3UdadJjorX6-8tFGGJDigQ/s6400/logo%203d%20upi.png" 
                      alt="UPI Logo"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase font-black text-blue-600 tracking-[0.2em] mb-1">Mahasiswa</div>
                    <div className="text-[13px] font-black text-slate-900 leading-tight">
                      Universitas <br /> 
                      <span className="text-blue-700 italic">Pendidikan Indonesia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={20} className="text-slate-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section id="tentang" className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/3"
            >
              <div className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Tentang Saya</div>
              <h2 className="text-5xl md:text-6xl font-display font-black text-slate-900 leading-none mb-6">
                HI, I'M <br />
                <span className="text-blue-600">FIRDAUS.</span>
              </h2>
              <div className="h-1.5 w-20 bg-blue-600 rounded-full mb-8" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:w-2/3"
            >
              <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-800 mb-8 leading-tight">
                FUTURE TEACHER WITH A <br />
                <span className="italic text-slate-400 font-medium">DIFFERENT APPROACH</span>
              </h3>
              
              <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                <p className="text-xl md:text-2xl font-bold text-slate-900 italic border-l-4 border-blue-600 pl-6 py-2 bg-blue-50/50 rounded-r-2xl">
                  "Bukan sekadar mahasiswa. Bukan juga sekadar calon guru."
                </p>
                
                <p>
                  Saya <span className="text-slate-900 font-bold underline decoration-blue-600 underline-offset-4 decoration-2">Firdaus Musaddad Asyifa</span>, mahasiswa PGSD Universitas Pendidikan Indonesia yang tidak ingin menjadi guru biasa.
                </p>
                
                <p>
                  Saya mengeksplorasi bagaimana pembelajaran bisa keluar dari pola ceramah dan catat, lalu berubah menjadi sesuatu yang visual, interaktif, dan bermakna.
                </p>
                
                <p>
                  Saya tertarik pada desain, media pembelajaran, dan bagaimana teknologi dapat mengubah cara anak-anak memahami dunia.
                </p>
                
                <div className="flex flex-wrap gap-4 py-4">
                   <div className="px-4 py-2 bg-slate-100 rounded-full text-xs font-bold text-slate-500 uppercase tracking-wider">#VisualLearning</div>
                   <div className="px-4 py-2 bg-slate-100 rounded-full text-xs font-bold text-slate-500 uppercase tracking-wider">#EdTech</div>
                   <div className="px-4 py-2 bg-slate-100 rounded-full text-xs font-bold text-slate-500 uppercase tracking-wider">#InteractiveMedia</div>
                </div>

                <p className="text-slate-500">
                  Masih belajar? <span className="text-blue-600 font-bold">Jelas.</span> Masih berkembang? <span className="text-blue-600 font-bold">Pasti.</span>
                </p>
                
                <p className="text-xl md:text-2xl font-display font-bold text-slate-900">
                  Yang pasti, saya tidak ingin pendidikan berjalan dengan cara yang itu-itu saja.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section id="portofolio" className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3"
              >
                Arsip Digital Saya
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-display font-bold text-slate-900"
              >
                Eksplorasi Karya Media Pembelajaran.
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-500 font-medium md:text-right max-w-sm"
            >
              Kumpulan proyek literasi TIK yang dirancang khusus untuk meningkatkan 
              efektivitas belajar mengajar di tingkat SD.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className={`group cursor-pointer relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${
                  i === 0 ? 'md:col-span-4 md:row-span-1' : 
                  i === 1 ? 'md:col-span-2 md:row-span-1' :
                  i === 2 ? 'md:col-span-2 md:row-span-1' :
                  i === 3 ? 'md:col-span-2 md:row-span-1' :
                  'md:col-span-2 md:row-span-1'
                }`}
              >
                {/* Image Overlay */}
                <div className="relative aspect-video md:aspect-auto h-full w-full">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute top-6 left-6 flex items-center gap-2">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/30">
                      <CategoryIcon category={project.category} size={20} />
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex gap-2 mb-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-white/70 bg-white/10 backdrop-blur-md px-2 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 leading-tight group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white/50">{project.year}</span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="text-white bg-blue-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <ArrowRight size={18} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="pt-20 pb-10 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                Mari Berkolaborasi <br />
                <span className="text-blue-500">Menciptakan Media Cerdas.</span>
              </h2>
              <p className="text-slate-400 font-medium mb-10 max-w-md">
                Kritik dan saran sangat terbuka bagi pengembangan media literasi TIK ini. 
                Hubungi saya melalui media sosial di bawah ini.
              </p>
              <div className="flex gap-6">
                <a href="https://www.instagram.com/frdsm.a_?igsh=MW52a3Q0eWR0aHI1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Instagram</div>
                    <div className="font-bold text-white">@frdsm.a_</div>
                  </div>
                </a>
                <a href="mailto:firdausmusaddadasyifa@upi.edu" className="flex items-center gap-3 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <FileText size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email</div>
                    <div className="font-bold text-white">firdausmusadda...</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold mb-6">Kirim Pesan Cepat</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Nama Lengkap" 
                  className="w-full bg-slate-900 border border-slate-700 p-4 rounded-xl focus:outline-hidden focus:border-blue-500 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email Mahasiswa" 
                  className="w-full bg-slate-900 border border-slate-700 p-4 rounded-xl focus:outline-hidden focus:border-blue-500 transition-colors"
                />
                <textarea 
                  placeholder="Kesan terhadap media ini..." 
                  rows={4}
                  className="w-full bg-slate-900 border border-slate-700 p-4 rounded-xl focus:outline-hidden focus:border-blue-500 transition-colors"
                ></textarea>
                <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors">
                  Kirim Sekarang
                </button>
              </form>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
              © 2025 archive media digital. firdaus
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-sm font-bold text-slate-500 hover:text-white transition-colors">PRIVACY</a>
              <a href="#" className="text-sm font-bold text-slate-500 hover:text-white transition-colors">TERMS</a>
              <a href="#" className="text-sm font-bold text-slate-500 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
        </div>

        {/* Decor */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      </footer>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex-1 bg-slate-100 overflow-hidden relative group min-h-[300px]">
                {selectedProject.category === 'Video' || selectedProject.category === 'Podcast' ? (
                  <iframe 
                    src={selectedProject.mediaUrl}
                    className="w-full h-full absolute inset-0"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <>
                    <img 
                      src={selectedProject.thumbnail} 
                      alt={selectedProject.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <button 
                        onClick={() => openMedia(selectedProject.mediaUrl)}
                        className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-blue-600 shadow-xl cursor-pointer hover:scale-110 transition-transform"
                       >
                          <ExternalLink size={24} />
                       </button>
                    </div>
                  </>
                )}
              </div>
              
              <div className="flex-1 p-8 md:p-12 overflow-y-auto">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3">
                      <CategoryIcon category={selectedProject.category} size={12} />
                      {selectedProject.category}
                    </div>
                    <h2 className="text-3xl font-display font-bold text-slate-900">{selectedProject.title}</h2>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-2 bg-slate-100 rounded-xl hover:bg-red-50 hover:text-red-600 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="mb-8">
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Tahun</div>
                    <div className="font-bold text-slate-800">{selectedProject.year}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Mata Kuliah</div>
                    <div className="font-bold text-slate-800">Literasi TIK</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                      #{tag}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => openMedia(selectedProject.mediaUrl)}
                  className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors group"
                >
                  Buka Media Pembelajaran <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

