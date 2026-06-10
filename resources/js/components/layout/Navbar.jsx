import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useContactModal } from "../../hooks/useContactModal";
import { cn } from "../../lib/utils";

function CrystalLogo({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="182"
            height="364"
            viewBox="0 0 161 364"
            fill="none"
            className="h-9 w-auto"
            aria-hidden="true"
        >
            <path
                d="M1.41504 69.5928L80.5 359.253L159.586 69.5928L80.5 1.64746L1.41504 69.5928Z"
                stroke="#F0EEF8"
                strokeWidth="2.5"
            />
            <path
                d="M161 69.1602L80.5 364V247.509L124.406 83.7207L80.5 50.9619V0L161 69.1602Z"
                fill="#7F46F0"
            />
            <path
                d="M80.5028 247.52V50.9604L36.5938 83.7205L80.5028 247.52Z"
                fill="#F0F0F0"
            />
        </svg>
    );
}

const NAV_LINKS = [
    { key: "home", to: "/" },
    { key: "desarrollo", to: "/desarrollo" },
    { key: "productos", to: "/productos" },
    { key: "soporte", to: "/soporte" },
];

export default function Navbar() {
    const { t, i18n } = useTranslation("common");
    const { open } = useContactModal();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    function toggleLang() {
        i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
    }

    function handleNavClick(to) {
        if (location.pathname === to) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-30 transition-all duration-300",
                    scrolled
                        ? "bg-[#0D0D12]/80 backdrop-blur-md border-b border-white/5 py-3"
                        : "bg-transparent py-5",
                )}
            >
                <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                    <NavLink
                        to="/"
                        className="flex items-center gap-3 group"
                        onClick={() => handleNavClick("/")}
                    >
                        <CrystalLogo />
                        <span className="font-semibold text-crystal-white tracking-wide group-hover:text-violet-light transition-colors">
                            Crystal Desarrollo
                        </span>
                    </NavLink>

                    <ul className="hidden md:flex items-center gap-7">
                        {NAV_LINKS.map(({ key, to }) => (
                            <li key={key}>
                                <NavLink
                                    to={to}
                                    onClick={() => handleNavClick(to)}
                                    className={({ isActive }) =>
                                        cn(
                                            "text-sm font-medium transition-colors",
                                            isActive
                                                ? "text-[#F0EEF8]"
                                                : "text-[#F0EEF8]/50 hover:text-[#F0EEF8]/80",
                                        )
                                    }
                                >
                                    {t(`nav.${key}`)}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={toggleLang}
                            className="text-xs font-semibold text-[#F0EEF8]/50 hover:text-[#F0EEF8]/80 transition-colors px-2 py-1 rounded border border-white/10 hover:border-white/20"
                        >
                            {i18n.language === "es" ? "EN" : "ES"}
                        </button>
                        <button
                            onClick={() => open()}
                            className="px-4 py-2 rounded-lg bg-[#7F46F0] text-white text-sm font-medium hover:bg-[#6b35d4] transition-colors"
                        >
                            {t("nav.cta")}
                        </button>
                    </div>

                    <button
                        className="md:hidden text-[#F0EEF8]/70 hover:text-[#F0EEF8] transition-colors"
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </nav>
            </header>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-20 bg-[#0D0D12] pt-20 px-6 flex flex-col md:hidden"
                    >
                        <ul className="flex flex-col gap-2 mt-4">
                            {NAV_LINKS.map(({ key, to }) => (
                                <li key={key}>
                                    <NavLink
                                        to={to}
                                        onClick={() => {
                                            handleNavClick(to);
                                            setMenuOpen(false);
                                        }}
                                        className={({ isActive }) =>
                                            cn(
                                                "block py-3 text-lg font-medium border-b border-white/5 transition-colors",
                                                isActive
                                                    ? "text-[#F0EEF8]"
                                                    : "text-[#F0EEF8]/50",
                                            )
                                        }
                                    >
                                        {t(`nav.${key}`)}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 flex flex-col gap-3">
                            <button
                                onClick={toggleLang}
                                className="py-3 text-sm font-semibold text-[#F0EEF8]/50 border border-white/10 rounded-lg"
                            >
                                {i18n.language === "es"
                                    ? "Switch to English"
                                    : "Cambiar a Español"}
                            </button>
                            <button
                                onClick={() => {
                                    open();
                                    setMenuOpen(false);
                                }}
                                className="py-3 rounded-lg bg-[#7F46F0] text-white font-medium text-sm"
                            >
                                {t("nav.cta")}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
