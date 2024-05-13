// Core i18next library.
import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

export const supportedLngs = {
    en: "🇺🇸 English",
    ru: "🇷🇺 Русский",
};

i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // Comment lng param to turn on automatically language detector
        // lng: "en",
        fallbackLng: "en",
        supportedLngs: Object.keys(supportedLngs),
        debug: true,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;