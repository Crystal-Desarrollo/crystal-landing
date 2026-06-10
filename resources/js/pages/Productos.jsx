import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useContactModal } from '../hooks/useContactModal';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';
import { CheckCircle2, ExternalLink } from 'lucide-react';

const PRODUCT_KEYS = ['parkify', 'obsidian', 'mifit'];
const PRODUCT_URLS = {
    parkify: 'https://parkify.com.ar',
    obsidian: 'https://getobsidian.app',
    mifit: 'https://getmifit.app',
};
const PRODUCT_COLORS = {
    parkify: '#4F8EF7',
    obsidian: '#7F46F0',
    mifit: '#2DD4BF',
};

function ProductCard({ productKey }) {
    const { t } = useTranslation('productos');
    const features = t(`${productKey}.features`, { returnObjects: true });
    const color = PRODUCT_COLORS[productKey];
    const url = PRODUCT_URLS[productKey];

    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16 border-b border-white/5 last:border-0"
        >
            <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
                    style={{ color, backgroundColor: color + '15' }}>
                    {t(`${productKey}.badge`)}
                </span>
                <h2
                    className="text-3xl md:text-4xl font-light text-[#F0EEF8] mb-2"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                >
                    {t(`${productKey}.name`)}
                </h2>
                <p className="text-base text-[#F0EEF8]/60 mb-3 italic">{t(`${productKey}.tagline`)}</p>
                <p className="text-sm text-[#F0EEF8]/50 leading-relaxed mb-6">{t(`${productKey}.desc`)}</p>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-colors"
                    style={{ backgroundColor: color }}
                >
                    {t(`${productKey}.cta`)}
                    <ExternalLink size={14} />
                </a>
            </div>
            <ul className="flex flex-col gap-3">
                {Array.isArray(features) && features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[#F0EEF8]/60">
                        <CheckCircle2 size={16} style={{ color }} className="shrink-0" />
                        {f}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

export default function Productos() {
    const { t } = useTranslation('productos');
    const { open } = useContactModal();

    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-16 bg-[#0D0D12] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_-10%,rgba(127,70,240,0.15),transparent)]" />
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
                        <motion.p variants={fadeUp} className="text-[#F0EEF8]/50 max-w-xl leading-relaxed">
                            {t('hero.subtitle')}
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Products */}
            <section className="max-w-6xl mx-auto px-6 py-8">
                {PRODUCT_KEYS.map((key) => (
                    <ProductCard key={key} productKey={key} />
                ))}
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#1A1A24] text-center">
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
                            onClick={() => open('saas')}
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
