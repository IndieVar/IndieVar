// Core i18next library.
import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import {initReactI18next} from "react-i18next";

export const supportedLngs = {
    en: "English",
    ru: "Russian",
};

i18n
    .use(HttpApi)
    .use(initReactI18next)
    .init({
        lng: "en",
        fallbackLng: "en",
        supportedLngs: Object.keys(supportedLngs),
        debug: true,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;