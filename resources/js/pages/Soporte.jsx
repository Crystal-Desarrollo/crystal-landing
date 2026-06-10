import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useContactModal } from '../hooks/useContactModal';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';
import { CheckCircle2, ChevronDown, MapPin, Phone } from 'lucide-react';

function FaqItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-white/5">
            <button
                onClick={() => setOpen((v) => !v)}
                className="w-full flex items-center justify-between py-5 text-left gap-4"
            >
                <span className="text-sm font-medium text-[#F0EEF8]/80">{q}</span>
                <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={16} className="text-[#F0EEF8]/40 shrink-0" />
                </motion.div>
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                    >
                        <p className="text-sm text-[#F0EEF8]/50 leading-relaxed pb-5">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function Soporte() {
    const { t } = useTranslation('soporte');
    const { open } = useContactModal();
    const services = t('services.items', { returnObjects: true });
    const faqItems = t('faq.items', { returnObjects: true });
    const cities = t('coverage.cities', { returnObjects: true });

    const PLANS = ['basic', 'pro', 'enterprise'];

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-16 bg-[#0D0D12] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_-10%,rgba(127,70,240,0.15),transparent)]" />
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
                        <motion.p variants={fadeUp} className="text-[#F0EEF8]/50 max-w-xl leading-relaxed mb-8">
                            {t('hero.subtitle')}
                        </motion.p>
                        <motion.div variants={fadeUp}>
                            <button
                                onClick={() => open('soporte')}
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
                            <motion.div key={i} variants={fadeUp}
                                className="p-6 rounded-xl bg-[#0D0D12] border border-white/5 hover:border-[#7F46F0]/20 transition-colors">
                                <h3 className="text-base font-medium text-[#F0EEF8] mb-2">{s.title}</h3>
                                <p className="text-sm text-[#F0EEF8]/50 leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Plans */}
            <section className="py-24 bg-[#0D0D12]">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center mb-12">
                        <motion.span variants={fadeUp} className="inline-block text-xs font-semibold text-[#7F46F0] uppercase tracking-widest mb-2">
                            {t('plans.badge')}
                        </motion.span>
                        <motion.h2
                            variants={fadeUp}
                            className="text-3xl md:text-4xl font-light text-[#F0EEF8]"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                            {t('plans.title')}
                        </motion.h2>
                        <motion.p variants={fadeUp} className="mt-3 text-[#F0EEF8]/50 text-sm">{t('plans.subtitle')}</motion.p>
                    </motion.div>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        className="grid grid-cols-1 md:grid-cols-3 gap-5"
                    >
                        {PLANS.map((plan) => {
                            const features = t(`plans.${plan}.features`, { returnObjects: true });
                            const isPro = plan === 'pro';
                            return (
                                <motion.div
                                    key={plan}
                                    variants={fadeUp}
                                    className={`p-7 rounded-2xl border flex flex-col relative ${isPro
                                        ? 'bg-[#7F46F0]/10 border-[#7F46F0]/30'
                                        : 'bg-[#1A1A24] border-white/5'}`}
                                >
                                    {isPro && t('plans.pro.recommended') && (
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#7F46F0] text-white text-xs font-medium">
                                            {t('plans.pro.recommended')}
                                        </span>
                                    )}
                                    <h3 className="text-xl font-semibold text-[#F0EEF8] mb-1">{t(`plans.${plan}.name`)}</h3>
                                    <p className="text-2xl font-light text-[#7F46F0] mb-3">{t(`plans.${plan}.price`)}</p>
                                    <p className="text-sm text-[#F0EEF8]/50 mb-6 leading-relaxed">{t(`plans.${plan}.desc`)}</p>
                                    <ul className="flex flex-col gap-2.5 mb-8">
                                        {Array.isArray(features) && features.map((f, i) => (
                                            <li key={i} className="flex items-center gap-2.5 text-sm text-[#F0EEF8]/60">
                                                <CheckCircle2 size={14} className="text-[#7F46F0] shrink-0" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={() => open('soporte')}
                                        className={`mt-auto py-2.5 rounded-lg text-sm font-medium transition-colors ${isPro
                                            ? 'bg-[#7F46F0] text-white hover:bg-[#6b35d4]'
                                            : 'border border-white/10 text-[#F0EEF8]/70 hover:border-white/20'}`}
                                    >
                                        {t('plans.cta')}
                                    </button>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Coverage */}
            <section className="py-20 bg-[#1A1A24]">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}
                        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div>
                            <motion.span variants={fadeUp} className="inline-block text-xs font-semibold text-[#7F46F0] uppercase tracking-widest mb-3">
                                {t('coverage.badge')}
                            </motion.span>
                            <motion.h2
                                variants={fadeUp}
                                className="text-3xl font-light text-[#F0EEF8] mb-4"
                                style={{ fontFamily: "'Syne', sans-serif" }}
                            >
                                {t('coverage.title')}
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-sm text-[#F0EEF8]/50 leading-relaxed mb-6">
                                {t('coverage.desc')}
                            </motion.p>
                            <motion.div variants={fadeUp}>
                                <a
                                    href="https://maps.app.goo.gl/WcrQcbFaSDihJnWJA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-[#7F46F0] hover:text-[#9b6df7] transition-colors"
                                >
                                    <MapPin size={14} /> Ver en mapa
                                </a>
                            </motion.div>
                        </div>
                        <motion.ul variants={staggerContainer} className="flex flex-wrap gap-2">
                            {Array.isArray(cities) && cities.map((city) => (
                                <motion.li
                                    key={city}
                                    variants={fadeUp}
                                    className="px-3 py-1.5 rounded-full bg-[#0D0D12] border border-white/5 text-sm text-[#F0EEF8]/60"
                                >
                                    {city}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-[#0D0D12]">
                <div className="max-w-3xl mx-auto px-6">
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-10">
                        <motion.span variants={fadeUp} className="inline-block text-xs font-semibold text-[#7F46F0] uppercase tracking-widest mb-2">
                            {t('faq.badge')}
                        </motion.span>
                        <motion.h2
                            variants={fadeUp}
                            className="text-3xl font-light text-[#F0EEF8]"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                            {t('faq.title')}
                        </motion.h2>
                    </motion.div>
                    {Array.isArray(faqItems) && faqItems.map((item, i) => (
                        <FaqItem key={i} q={item.q} a={item.a} />
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#1A1A24] text-center">
                <div className="max-w-xl mx-auto px-6">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        className="text-4xl font-light text-[#F0EEF8] mb-3"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                        {t('cta.title')}
                    </motion.h2>
                    <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
                        className="text-[#F0EEF8]/50 mb-8 text-sm">
                        {t('cta.subtitle')}
                    </motion.p>
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}
                        className="flex flex-col sm:flex-row gap-3 justify-center">
                        <motion.a
                            variants={fadeUp}
                            href="tel:+5493884092771"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-[#F0EEF8]/80 text-sm hover:bg-white/5 transition-colors"
                        >
                            <Phone size={14} /> {t('cta.button_call')}
                        </motion.a>
                        <motion.a
                            variants={fadeUp}
                            href="https://wa.me/543884092771"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white text-sm font-medium hover:bg-[#20bc59] transition-colors"
                        >
                            WhatsApp
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
