import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fadeUp, viewportOnce } from "../../lib/motion";

const CLIENTS = [
    "Cintas Calzados",
    "Mi Cochera & Mi Lavadero",
    "Las Marías Proyectos",
    "Gobierno de Jujuy",
    "Cámara de Comercio Exterior",
    "ExpoJuy",
    "Cañada Húmeda S.A.",
    "BSD Ingeniería y Servicios",
    "Centro Cultural Lola Mora",
    "Centro Dermatológico DYMEC",
];

export default function ClientsSection() {
    const { t } = useTranslation("home");

    return (
        <section className="py-16 bg-[#0D0D12] border-y border-white/5">
            <div className="max-w-6xl mx-auto px-6">
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="text-xs font-semibold text-[#F0EEF8]/85 uppercase tracking-widest text-center mb-10"
                >
                    {t("clients.title")}
                </motion.p>
                <div className="relative overflow-hidden">
                    <div className="flex gap-12 animate-marquee whitespace-nowrap">
                        {[...CLIENTS, ...CLIENTS].map((name, i) => (
                            <span
                                key={i}
                                className="text-[#F0EEF8]/80 font-medium text-sm shrink-0"
                            >
                                {name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
