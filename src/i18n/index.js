import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// import language files
import englishData from './en.json';
import italianData from './it.json';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
      fallbackLng: 'en',
      // debug: true,
      resources: {
        en: {
            translation: englishData,
        },
        it : {
            translation: italianData,
        }
      },
      react : {
        useSuspense : false,
      }
});


export default i18next;
