export type SupportedLanguage = 'en' | 'fr';

export interface GeoLocation {
  country: string;
  region: string;
  city: string;
}

export interface LanguagePreference {
  language: SupportedLanguage;
  isAutoDetected: boolean;
}