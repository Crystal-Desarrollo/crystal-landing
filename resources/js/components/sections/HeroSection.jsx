import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useContactModal } from "../../hooks/useContactModal";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";

export default function HeroSection() {
    const { t } = useTranslation("home");
    const { open } = useContactModal();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D12] pt-20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(127,70,240,0.18),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_70%,rgba(127,70,240,0.07),transparent)]" />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-4xl mx-auto px-6 text-center"
            >
                <motion.div variants={fadeUp} className="mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7F46F0]/10 border border-[#7F46F0]/20 text-[#7F46F0] text-xs font-medium tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7F46F0] animate-pulse" />
                        {t("hero.badge")}
                    </span>
                </motion.div>

                <motion.h1
                    variants={fadeUp}
                    className="text-5xl md:text-7xl font-light text-[#F0EEF8] leading-tight mb-6"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                >
                    {t("hero.title")}
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    className="text-lg text-[#F0EEF8]/50 max-w-xl mx-auto mb-10 leading-relaxed"
                >
                    {t("hero.subtitle")}
                </motion.p>

                <motion.div
                    variants={fadeUp}
                    className="flex flex-col sm:flex-row gap-3 justify-center"
                >
                    <Link
                        to="/desarrollo"
                        className="px-6 py-3 rounded-lg border border-white/10 text-[#F0EEF8]/80 text-sm font-medium hover:bg-white/5 hover:border-white/20 transition-colors"
                    >
                        {t("hero.cta_primary")}
                    </Link>
                    <button
                        onClick={() => open()}
                        className="px-6 py-3 rounded-lg bg-[#7F46F0] text-white text-sm font-medium hover:bg-[#6b35d4] transition-colors"
                    >
                        {t("hero.cta_secondary")}
                    </button>
                </motion.div>
            </motion.div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                    }}
                    className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
                >
                    <div className="w-1 h-2 rounded-full bg-white/40" />
                </motion.div>
            </div>
        </section>
    );
}
