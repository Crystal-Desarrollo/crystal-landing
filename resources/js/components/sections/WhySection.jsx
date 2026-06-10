import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle2 } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion';

export default function WhySection() {
    const { t } = useTranslation('home');
    const items = t('why.items', { returnObjects: true });

    return (
        <section className="py-24 bg-[#0D0D12]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                    >
                        <motion.span variants={fadeUp} className="inline-block text-xs font-semibold text-[#7F46F0] uppercase tracking-widest mb-3">
                            {t('why.badge')}
                        </motion.span>
                        <motion.h2
                            variants={fadeUp}
                            className="text-3xl md:text-4xl font-light text-[#F0EEF8] mb-4"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                            {t('why.title')}
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-[#F0EEF8]/50 text-sm leading-relaxed">
                            {t('why.subtitle')}
                        </motion.p>
                    </motion.div>

                    <motion.ul
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                        className="flex flex-col gap-5"
                    >
                        {Array.isArray(items) && items.map((item, i) => (
                            <motion.li key={i} variants={fadeUp} className="flex gap-4">
                                <CheckCircle2 size={20} className="text-[#7F46F0] shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-medium text-[#F0EEF8]">{item.title}</p>
                                    <p className="text-sm text-[#F0EEF8]/50 mt-0.5">{item.desc}</p>
                                </div>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </section>
    );
}
