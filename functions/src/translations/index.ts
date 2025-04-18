import { ar } from './ar';
import { de } from './de';
import { en } from './en';
import { es } from './es';
import { fr } from './fr';
import { hi } from './hi';
import { ja } from './ja';
import { ko } from './ko';
import { pt } from './pt';
import { ro } from './ro';
import { ru } from './ru';
import { ITranslation } from './types';
import { zh } from './zh';

export const translations: Record<string, ITranslation> = {
  en,
  es,
  ar,
  de,
  fr,
  hi,
  ja,
  ko,
  pt,
  ro,
  ru,
  zh,
};

export const getTranslation = (lang: string): ITranslation => {
  return translations[lang] || translations['en'];
};
