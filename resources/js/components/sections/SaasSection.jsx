import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ExternalLink } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce, scaleIn } from '../../lib/motion';

const PRODUCTS = [
    { key: 'parkify', href: 'https://parkify.com.ar', color: '#4F8EF7' },
    { key: 'obsidian', href: 'https://getobsidian.app', color: '#7F46F0' },
    { key: 'mifit', href: 'https://getmifit.app', color: '#2DD4BF' },
];

export default function SaasSection() {
    const { t } = useTranslation('home');

    return (
        <section className="py-24 bg-[#1A1A24]">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="text-center mb-14"
                >
                    <motion.span variants={fadeUp} className="inline-block text-xs font-semibold text-[#7F46F0] uppercase tracking-widest mb-3">
                        {t('saas.badge')}
                    </motion.span>
                    <motion.h2
                        variants={fadeUp}
                        className="text-3xl md:text-4xl font-light text-[#F0EEF8]"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        {t('saas.title')}
                    </motion.h2>
                    <motion.p variants={fadeUp} className="mt-3 text-[#F0EEF8]/50 max-w-md mx-auto text-sm">
                        {t('saas.subtitle')}
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {PRODUCTS.map(({ key, href, color }) => (
                        <motion.div key={key} variants={scaleIn}
                            className="group p-7 rounded-2xl bg-[#0D0D12] border border-white/5 hover:border-white/10 transition-all flex flex-col"
                        >
                            <div
                                className="w-10 h-10 rounded-lg mb-5 flex items-center justify-center text-sm font-bold text-white"
                                style={{ backgroundColor: color + '20', color }}
                            >
                                {t(`saas.${key}.name`).charAt(0)}
                            </div>
                            <h3 className="text-xl font-semibold text-[#F0EEF8] mb-2">
                                {t(`saas.${key}.name`)}
                            </h3>
                            <p className="text-sm text-[#F0EEF8]/50 leading-relaxed mb-6">
                                {t(`saas.${key}.desc`)}
                            </p>
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
                                style={{ color }}
                            >
                                {t(`saas.${key}.cta`)}
                                <ExternalLink size={12} />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
