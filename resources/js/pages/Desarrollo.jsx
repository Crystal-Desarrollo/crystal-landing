import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useContactModal } from '../hooks/useContactModal';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
    SiReact, SiNextdotjs, SiVuedotjs, SiLaravel, SiNodedotjs,
    SiPostgresql, SiMysql, SiRedis, SiDocker, SiKubernetes,
    SiTypescript, SiPython, SiTailwindcss,
} from 'react-icons/si';

const STACK = [
    { name: 'React',        Icon: SiReact,        color: '#61DAFB' },
    { name: 'Next.js',      Icon: SiNextdotjs,    color: '#FFFFFF' },
    { name: 'Vue',          Icon: SiVuedotjs,     color: '#42B883' },
    { name: 'Laravel',      Icon: SiLaravel,      color: '#FF2D20' },
    { name: 'Node.js',      Icon: SiNodedotjs,    color: '#339933' },
    { name: 'PostgreSQL',   Icon: SiPostgresql,   color: '#4169E1' },
    { name: 'MySQL',        Icon: SiMysql,        color: '#4479A1' },
    { name: 'Redis',        Icon: SiRedis,        color: '#DC382D' },
    { name: 'Docker',       Icon: SiDocker,       color: '#2496ED' },
    { name: 'Kubernetes',   Icon: SiKubernetes,   color: '#326CE5' },
    { name: 'TypeScript',   Icon: SiTypescript,   color: '#3178C6' },
    { name: 'Python',       Icon: SiPython,       color: '#3776AB' },
    { name: 'React Native', Icon: SiReact,        color: '#61DAFB' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss,  color: '#06B6D4' },
];

export default function Desarrollo() {
    const { t } = useTranslation('desarrollo');
    const { open } = useContactModal();
    const services = t('services.items', { returnObjects: true });
    const steps = t('process.steps', { returnObjects: true });
    const [step, setStep] = useState(0);

    return (
        <>
            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-end bg-[#0D0D12] pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_-10%,rgba(127,70,240,0.15),transparent)]" />
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <motion.div variants={staggerContainer} initial="hidden" animate="visible">
                        <motion.span variants={fadeUp} className="inline-block text-xs font-semibold text-[#7F46F0] uppercase tracking-widest mb-3">
                            {t('hero.badge')}
                        </motion.span>
                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl md:text-6xl font-light text-[#F0EEF8] max-w-3xl leading-tight mb-5"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                            {t('hero.title')}
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-[#F0EEF8]/50 max-w-xl mb-8 leading-relaxed">
                            {t('hero.subtitle')}
                        </motion.p>
                        <motion.div variants={fadeUp}>
                            <button
                                onClick={() => open('desarrollo')}
                                className="px-6 py-3 rounded-lg bg-[#7F46F0] text-white text-sm font-medium hover:bg-[#6b35d4] transition-colors"
                            >
                                {t('hero.cta')}
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Services */}
            <section className="py-24 bg-[#1A1A24]">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-12">
                        <motion.span variants={fadeUp} className="inline-block text-xs font-semibold text-[#7F46F0] uppercase tracking-widest mb-2">
                            {t('services.badge')}
                        </motion.span>
                        <motion.h2
                            variants={fadeUp}
                            className="text-3xl md:text-4xl font-light text-[#F0EEF8]"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                            {t('services.title')}
                        </motion.h2>
                    </motion.div>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {Array.isArray(services) && services.map((s, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                className="p-6 rounded-xl bg-[#0D0D12] border border-white/5 hover:border-[#7F46F0]/20 transition-colors"
                            >
                                <h3 className="text-base font-medium text-[#F0EEF8] mb-2">{s.title}</h3>
                                <p className="text-sm text-[#F0EEF8]/50 leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Process carousel */}
            <section className="py-24 bg-[#0D0D12]">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-12 text-center">
                        <motion.span variants={fadeUp} className="inline-block text-xs font-semibold text-[#7F46F0] uppercase tracking-widest mb-2">
                            {t('process.badge')}
                        </motion.span>
                        <motion.h2
                            variants={fadeUp}
                            className="text-3xl md:text-4xl font-light text-[#F0EEF8]"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                            {t('process.title')}
                        </motion.h2>
                    </motion.div>

                    {Array.isArray(steps) && (
                        <>
                            {/* Desktop */}
                            <div className="hidden md:flex gap-0">
                                {steps.map((s, i) => (
                                    <div key={i} className="flex-1 relative">
                                        <div className="p-6 border-l border-white/5 h-full">
                                            <span className="text-4xl font-light text-[#7F46F0]/20">{s.num}</span>
                                            <h3 className="text-base font-medium text-[#F0EEF8] mt-3 mb-2">{s.title}</h3>
                                            <p className="text-sm text-[#F0EEF8]/50 leading-relaxed">{s.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Mobile carousel */}
                            <div className="md:hidden relative">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={step}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -30 }}
                                        transition={{ duration: 0.25 }}
                                        className="p-7 rounded-2xl bg-[#1A1A24] border border-white/5"
                                    >
                                        <span className="text-5xl font-light text-[#7F46F0]/20">{steps[step].num}</span>
                                        <h3 className="text-xl font-medium text-[#F0EEF8] mt-3 mb-2">{steps[step].title}</h3>
                                        <p className="text-sm text-[#F0EEF8]/50 leading-relaxed">{steps[step].desc}</p>
                                    </motion.div>
                                </AnimatePresence>
                                <div className="flex items-center justify-center gap-4 mt-6">
                                    <button onClick={() => setStep((s) => (s - 1 + steps.length) % steps.length)}
                                        className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#F0EEF8]/50">
                                        <ChevronLeft size={16} />
                                    </button>
                                    <span className="text-sm text-[#F0EEF8]/30">{step + 1} / {steps.length}</span>
                                    <button onClick={() => setStep((s) => (s + 1) % steps.length)}
                                        className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#F0EEF8]/50">
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* Stack */}
            <section className="py-20 bg-[#1A1A24] overflow-hidden">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center mb-10">
                        <motion.span variants={fadeUp} className="inline-block text-xs font-semibold text-[#7F46F0] uppercase tracking-widest mb-2">
                            {t('stack.badge')}
                        </motion.span>
                        <motion.h2
                            variants={fadeUp}
                            className="text-3xl font-light text-[#F0EEF8]"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                            {t('stack.title')}
                        </motion.h2>
                    </motion.div>
                </div>

                {/* Infinite marquee */}
                <div
                    className="relative"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    }}
                >
                    <style>{`
                        @keyframes marquee {
                            from { transform: translateX(0); }
                            to   { transform: translateX(-50%); }
                        }
                        .marquee-track {
                            display: flex;
                            width: max-content;
                            animation: marquee 20s linear infinite;
                        }
                        .marquee-track:hover {
                            animation-play-state: paused;
                        }
                    `}</style>
                    <div className="marquee-track" style={{ gap: '1.25rem' }}>
                        {[...STACK, ...STACK].map(({ name, Icon, color }, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center gap-2 px-5 py-4 rounded-xl bg-[#0D0D12] border border-white/5 hover:border-[#7F46F0]/20 transition-colors whitespace-nowrap mx-1"
                            >
                                <Icon size={28} style={{ color }} />
                                <span className="text-xs text-[#F0EEF8]/50">{name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#0D0D12] text-center">
                <div className="max-w-2xl mx-auto px-6">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        className="text-4xl font-light text-[#F0EEF8] mb-4"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                        {t('cta.title')}
                    </motion.h2>
                    <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
                        className="text-[#F0EEF8]/50 mb-8">
                        {t('cta.subtitle')}
                    </motion.p>
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                        <button
                            onClick={() => open('desarrollo')}
                            className="px-8 py-3.5 rounded-lg bg-[#7F46F0] text-white font-medium hover:bg-[#6b35d4] transition-colors"
                        >
                            {t('cta.button')}
                        </button>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
