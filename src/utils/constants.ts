export const SUPPORTED_LANGUAGES = ['en', 'fr'] as const;
export const DEFAULT_LANGUAGE = 'en';
export const LANGUAGE_COOKIE_KEY = 'preferred_language';

export const FRENCH_COUNTRIES = ['FR', 'MC', 'LU', 'BE'];

export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];