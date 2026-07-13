import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { useContactModal } from '../../hooks/useContactModal';
import { cn } from '../../lib/utils';

export default function ContactModal() {
    const { t, i18n } = useTranslation('common');
    const { isOpen, close, preselectedArea } = useContactModal();

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        setError,
        clearErrors,
    } = useForm();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            if (preselectedArea) setValue('area', preselectedArea);
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen, preselectedArea, setValue]);

    useEffect(() => {
        if (!isOpen) {
            reset();
            clearErrors();
        }
    }, [isOpen, reset, clearErrors]);

    async function onSubmit(data) {
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({ ...data, lang: i18n.language }),
            });
            if (!res.ok) {
                const body = await res.json().catch(() => ({}));
                throw new Error(body.message || 'error');
            }
        } catch {
            setError('root', { message: t('contact.error') });
            throw new Error('submit failed');
        }
    }

    const areas = ['desarrollo', 'saas', 'soporte', 'otro'];

    const inputCls = (hasError) => cn(
        'w-full rounded-lg px-4 py-3 text-sm bg-[#1A1A24] border transition-colors outline-none',
        'text-[#F0EEF8] placeholder:text-[#F0EEF8]/30',
        hasError
            ? 'border-red-500 focus:border-red-400'
            : 'border-white/10 focus:border-[#7F46F0]'
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                        onClick={close}
                    />
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, scale: 0.95, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 16 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div
                            className="relative w-full max-w-lg pointer-events-auto bg-[#1A1A24] border border-white/10 rounded-2xl shadow-2xl p-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={close}
                                className="absolute top-4 right-4 text-white/40 hover:text-white/80 transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {isSubmitSuccessful ? (
                                <div className="flex flex-col items-center text-center py-8 gap-4">
                                    <CheckCircle size={48} className="text-[#7F46F0]" />
                                    <h3 className="text-2xl font-semibold text-[#F0EEF8]">
                                        {t('contact.success_title')}
                                    </h3>
                                    <p className="text-[#F0EEF8]/60">{t('contact.success_body')}</p>
                                    <button
                                        onClick={close}
                                        className="mt-4 px-6 py-2.5 rounded-lg bg-[#7F46F0] text-white text-sm font-medium hover:bg-[#6b35d4] transition-colors"
                                    >
                                        {t('contact.success_close')}
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-semibold text-[#F0EEF8] mb-1">
                                        {t('contact.title')}
                                    </h2>
                                    <p className="text-sm text-[#F0EEF8]/50 mb-6">
                                        {t('contact.subtitle')}
                                    </p>

                                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                                        <div>
                                            <input
                                                {...register('name', { required: true })}
                                                placeholder={t('contact.name')}
                                                aria-label={t('contact.name')}
                                                className={inputCls(errors.name)}
                                            />
                                            {errors.name && (
                                                <p className="mt-1.5 text-xs text-red-400">{t('contact.errors.name_required')}</p>
                                            )}
                                        </div>
                                        <div>
                                            <input
                                                {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                                                type="email"
                                                placeholder={t('contact.email')}
                                                aria-label={t('contact.email')}
                                                className={inputCls(errors.email)}
                                            />
                                            {errors.email?.type === 'required' && (
                                                <p className="mt-1.5 text-xs text-red-400">{t('contact.errors.email_required')}</p>
                                            )}
                                            {errors.email?.type === 'pattern' && (
                                                <p className="mt-1.5 text-xs text-red-400">{t('contact.errors.email_invalid')}</p>
                                            )}
                                        </div>
                                        <div>
                                            <input
                                                {...register('company')}
                                                placeholder={t('contact.company')}
                                                aria-label={t('contact.company')}
                                                className={inputCls(false)}
                                            />
                                        </div>
                                        <div>
                                            <select
                                                {...register('area', { required: true })}
                                                className={cn(inputCls(errors.area), 'cursor-pointer')}
                                                defaultValue=""
                                                aria-label={t('contact.area')}
                                            >
                                                <option value="" disabled>{t('contact.area_select')}</option>
                                                {areas.map((a) => (
                                                    <option key={a} value={a}>{t(`contact.areas.${a}`)}</option>
                                                ))}
                                            </select>
                                            {errors.area && (
                                                <p className="mt-1.5 text-xs text-red-400">{t('contact.errors.area_required')}</p>
                                            )}
                                        </div>
                                        <div>
                                            <textarea
                                                {...register('message', { required: true })}
                                                placeholder={t('contact.message')}
                                                rows={4}
                                                aria-label={t('contact.message')}
                                                className={cn(inputCls(errors.message), 'resize-none')}
                                            />
                                            {errors.message && (
                                                <p className="mt-1.5 text-xs text-red-400">{t('contact.errors.message_required')}</p>
                                            )}
                                        </div>

                                        {errors.root && (
                                            <div className="flex items-center gap-2 text-red-400 text-sm">
                                                <AlertCircle size={16} />
                                                {errors.root.message}
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-3 rounded-lg bg-[#7F46F0] text-white font-medium text-sm hover:bg-[#6b35d4] disabled:opacity-60 transition-colors"
                                        >
                                            {isSubmitting ? t('contact.sending') : t('contact.send')}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
