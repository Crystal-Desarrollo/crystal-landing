import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useContactModal } from '../../hooks/useContactModal';

function CrystalLogo() {
    return (
        <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="20,2 2,20 20,38" fill="#F0EEF8" />
            <polygon points="20,2 38,20 20,38" fill="#7F46F0" />
        </svg>
    );
}

export default function Footer() {
    const { t } = useTranslation('common');
    const { open } = useContactModal();

    return (
        <footer className="bg-[#0D0D12] border-t border-white/5 pt-14 pb-8">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    <div className="md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <CrystalLogo />
                            <span className="font-semibold text-[#F0EEF8] text-lg">Crystal</span>
                        </Link>
                        <p className="text-sm text-[#F0EEF8]/40 leading-relaxed">
                            {t('footer.tagline')}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold text-[#F0EEF8]/30 uppercase tracking-widest mb-4">
                            {t('footer.areas')}
                        </h4>
                        <ul className="flex flex-col gap-2.5">
                            {[
                                { label: t('nav.desarrollo'), to: '/desarrollo' },
                                { label: t('nav.productos'), to: '/productos' },
                                { label: t('nav.soporte'), to: '/soporte' },
                            ].map(({ label, to }) => (
                                <li key={to}>
                                    <Link to={to} className="text-sm text-[#F0EEF8]/50 hover:text-[#F0EEF8]/80 transition-colors">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold text-[#F0EEF8]/30 uppercase tracking-widest mb-4">
                            Productos
                        </h4>
                        <ul className="flex flex-col gap-2.5">
                            {[
                                { label: 'Parkify', href: 'https://parkify.com.ar' },
                                { label: 'Obsidian POS', href: 'https://getobsidian.app' },
                                { label: 'Mifit', href: 'https://getmifit.app' },
                            ].map(({ label, href }) => (
                                <li key={href}>
                                    <a href={href} target="_blank" rel="noopener noreferrer"
                                        className="text-sm text-[#F0EEF8]/50 hover:text-[#F0EEF8]/80 transition-colors">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold text-[#F0EEF8]/30 uppercase tracking-widest mb-4">
                            {t('footer.contact')}
                        </h4>
                        <ul className="flex flex-col gap-3">
                            <li className="flex items-start gap-2 text-sm text-[#F0EEF8]/50">
                                <Mail size={14} className="mt-0.5 shrink-0 text-[#7F46F0]" />
                                <a href="mailto:contacto@crystal-desarrollo.com"
                                    className="hover:text-[#F0EEF8]/80 transition-colors break-all">
                                    contacto@crystal-desarrollo.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-[#F0EEF8]/50">
                                <Phone size={14} className="mt-0.5 shrink-0 text-[#7F46F0]" />
                                <a href="tel:+5493884804401" className="hover:text-[#F0EEF8]/80 transition-colors">
                                    +54 9 388 480-4401
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-[#F0EEF8]/50">
                                <MapPin size={14} className="mt-0.5 shrink-0 text-[#7F46F0]" />
                                <a href="https://maps.app.goo.gl/WcrQcbFaSDihJnWJA" target="_blank" rel="noopener noreferrer"
                                    className="hover:text-[#F0EEF8]/80 transition-colors leading-snug">
                                    {t('footer.address')}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[#F0EEF8]/25">{t('footer.rights')}</p>
                    <button
                        onClick={() => open()}
                        className="text-xs text-[#7F46F0] hover:text-[#9b6df7] transition-colors font-medium"
                    >
                        {t('nav.cta')} →
                    </button>
                </div>
            </div>
        </footer>
    );
}
