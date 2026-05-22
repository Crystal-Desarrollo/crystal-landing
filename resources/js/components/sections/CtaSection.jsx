import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useContactModal } from '../../hooks/useContactModal';
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion';

export default function CtaSection() {
    const { t } = useTranslation('home');
    const { open } = useContactModal();

    return (
        <section className="py-24 bg-[#0D0D12]">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                >
                    <motion.div variants={fadeUp} className="mb-4">
                        <div className="inline-block w-px h-12 bg-gradient-to-b from-transparent to-[#7F46F0]/50" />
                    </motion.div>
                    <motion.h2
                        variants={fadeUp}
                        className="text-4xl md:text-5xl font-light text-[#F0EEF8] mb-4"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        {t('cta.title')}
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-[#F0EEF8]/50 mb-8">
                        {t('cta.subtitle')}
                    </motion.p>
                    <motion.div variants={fadeUp}>
                        <button
                            onClick={() => open()}
                            className="px-8 py-3.5 rounded-lg bg-[#7F46F0] text-white font-medium hover:bg-[#6b35d4] transition-colors"
                        >
                            {t('cta.button')}
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
