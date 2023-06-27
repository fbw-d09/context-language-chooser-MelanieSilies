import { createContext } from "react";

const LanguageContext = createContext( {language: 'Deutsch', message:'Hallo Welt!'});

export { LanguageContext};