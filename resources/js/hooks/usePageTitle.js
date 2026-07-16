import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Sets document.title to "<localized title> · Crystal Desarrollo"
 * using the `titles.<key>` entry from the `common` namespace.
 */
export function usePageTitle(key) {
    const { t, i18n } = useTranslation('common');

    useEffect(() => {
        document.title = `${t('titles.' + key)} · Crystal Desarrollo`;
    }, [key, t, i18n.language]);

    return null;
}