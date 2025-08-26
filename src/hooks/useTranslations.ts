import {useTranslations} from 'next-intl';

// Custom hook to get common translations
export function useCommonTranslations() {
    return useTranslations('common');
}

// Custom hook to get navigation translations
export function useNavigationTranslations() {
    return useTranslations('navigation');
}

// Custom hook to get hero section translations
export function useHeroTranslations() {
    return useTranslations('hero');
}

// Custom hook to get projects translations
export function useProjectsTranslations() {
    return useTranslations('projects');
}

// Custom hook to get members translations
export function useMembersTranslations() {
    return useTranslations('members');
}
