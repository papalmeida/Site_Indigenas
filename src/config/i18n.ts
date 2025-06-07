import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translations from "../utils/pt.json";

i18n.use(initReactI18next).init({
    resources: {
        pt: {...translations}
    },
    lng: "pt",
});

export default i18n;