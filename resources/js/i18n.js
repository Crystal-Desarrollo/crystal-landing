import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import esCommon from './locales/es/common.json';
import esHome from './locales/es/home.json';
import esDesarrollo from './locales/es/desarrollo.json';
import esProductos from './locales/es/productos.json';
import esSoporte from './locales/es/soporte.json';

import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enDesarrollo from './locales/en/desarrollo.json';
import enProductos from './locales/en/productos.json';
import enSoporte from './locales/en/soporte.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            es: {
                common: esCommon,
                home: esHome,
                desarrollo: esDesarrollo,
                productos: esProductos,
                soporte: esSoporte,
            },
            en: {
                common: enCommon,
                home: enHome,
                desarrollo: enDesarrollo,
                productos: enProductos,
                soporte: enSoporte,
            },
        },
        defaultNS: 'common',
        fallbackLng: 'es',
        supportedLngs: ['es', 'en'],
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
