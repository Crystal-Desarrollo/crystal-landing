import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { fadeUp, viewportOnce } from '../../lib/motion';

const TESTIMONIALS = [
    {
        name: 'Juan García',
        role: 'Gerente de Operaciones',
        company: 'Empresa Local',
        text: 'Crystal nos ayudó a digitalizar todo el proceso de gestión. Lo que antes llevaba horas ahora tarda minutos.',
    },
    {
        name: 'María López',
        role: 'Directora',
        company: 'Pyme Regional',
        text: 'El equipo de soporte siempre responde rápido. Es tranquilizador saber que tenemos a alguien de confianza cuando algo falla.',
    },
    {
        name: 'Carlos Martínez',
        role: 'Dueño',
        company: 'Gastronomía NOA',
        text: 'Obsidian POS cambió la forma en que manejamos el restaurante. Sencillo, rápido y confiable.',
    },
];

export default function TestimonialsSection() {
    const { t } = useTranslation('home');
    const [current, setCurrent] = useState(0);

    function prev() { setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length); }
    function next() { setCurrent((c) => (c + 1) % TESTIMONIALS.length); }

    return (
        <section className="py-24 bg-[#1A1A24]">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="text-center mb-12"
                >
                    <span className="inline-block text-xs font-semibold text-[#7F46F0] uppercase tracking-widest mb-3">
                        {t('testimonials.badge')}
                    </span>
                    <h2
                        className="text-3xl md:text-4xl font-light text-[#F0EEF8]"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        {t('testimonials.title')}
                    </h2>
                </motion.div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.3 }}
                            className="bg-[#0D0D12] rounded-2xl p-8 md:p-10 border border-white/5"
                        >
                            <Quote size={28} className="text-[#7F46F0]/40 mb-5" />
                            <p className="text-[#F0EEF8]/80 text-lg leading-relaxed mb-7">
                                {TESTIMONIALS[current].text}
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-[#7F46F0]/20 flex items-center justify-center text-[#7F46F0] font-semibold text-sm">
                                    {TESTIMONIALS[current].name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-[#F0EEF8]">{TESTIMONIALS[current].name}</p>
                                    <p className="text-xs text-[#F0EEF8]/40">{TESTIMONIALS[current].role} · {TESTIMONIALS[current].company}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={prev}
                            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#F0EEF8]/50 hover:border-white/30 hover:text-[#F0EEF8] transition-all"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <div className="flex gap-2">
                            {TESTIMONIALS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`rounded-full transition-all ${i === current ? 'w-5 h-1.5 bg-[#7F46F0]' : 'w-1.5 h-1.5 bg-white/20'}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={next}
                            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#F0EEF8]/50 hover:border-white/30 hover:text-[#F0EEF8] transition-all"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
