import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Code2, Package, Wrench } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../../lib/motion';

const ICONS = [Code2, Package, Wrench];
const AREA_KEYS = ['desarrollo', 'saas', 'soporte'];
const AREA_LINKS = ['/desarrollo', '/productos', '/soporte'];
const AREA_MODALS = ['desarrollo', 'saas', 'soporte'];

export default function AreasSection() {
    const { t } = useTranslation('home');

    return (
        <section className="py-24 bg-[#0D0D12]">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="text-3xl md:text-4xl font-light text-[#F0EEF8] text-center mb-14"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                >
                    {t('areas.title')}
                </motion.h2>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="grid grid-cols-1 md:grid-cols-3 gap-5"
                >
                    {AREA_KEYS.map((key, i) => {
                        const Icon = ICONS[i];
                        return (
                            <motion.div key={key} variants={fadeUp}>
                                <Link
                                    to={AREA_LINKS[i]}
                                    className="group flex flex-col gap-4 p-7 rounded-2xl bg-[#1A1A24] border border-white/5 hover:border-[#7F46F0]/30 hover:bg-[#1e1e2e] transition-all h-full"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-[#7F46F0]/10 flex items-center justify-center">
                                        <Icon size={20} className="text-[#7F46F0]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-[#F0EEF8] mb-2 group-hover:text-white transition-colors">
                                            {t(`areas.${key}.title`)}
                                        </h3>
                                        <p className="text-sm text-[#F0EEF8]/50 leading-relaxed">
                                            {t(`areas.${key}.desc`)}
                                        </p>
                                    </div>
                                    <span className="mt-auto text-xs text-[#7F46F0]/70 group-hover:text-[#7F46F0] transition-colors">
                                        Conocer más →
                                    </span>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
