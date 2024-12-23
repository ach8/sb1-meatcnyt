import Cookies from 'js-cookie';
import { LANGUAGE_REGIONS, COOKIE_OPTIONS } from './constants';
import type { SupportedLanguage, GeoLocation } from './types';

const LANGUAGE_COOKIE_KEY = 'preferred_language';

export const getLanguageFromRegion = (location: GeoLocation): SupportedLanguage => {
  try {
    const { country } = location;
    for (const [lang, regions] of Object.entries(LANGUAGE_REGIONS)) {
      if (regions.includes(country)) {
        return lang as SupportedLanguage;
      }
    }
    return 'en';
  } catch (error) {
    console.warn('Language detection fallback to English:', error);
    return 'en';
  }
};

export const saveLanguagePreference = (language: SupportedLanguage): void => {
  try {
    // Ensure cookie value is a string and handle errors gracefully
    if (typeof language === 'string' && language) {
      Cookies.set(LANGUAGE_COOKIE_KEY, language, {
        ...COOKIE_OPTIONS,
        secure: window.location.protocol === 'https:'
      });
    }
  } catch (error) {
    console.warn('Cookie saving using fallback:', error);
    // Attempt localStorage fallback
    try {
      localStorage.setItem(LANGUAGE_COOKIE_KEY, language);
    } catch (e) {
      console.warn('Language preference could not be saved');
    }
  }
};

export const getStoredLanguagePreference = (): SupportedLanguage | null => {
  try {
    // Try cookies first
    const cookieValue = Cookies.get(LANGUAGE_COOKIE_KEY);
    if (cookieValue) return cookieValue as SupportedLanguage;

    // Fallback to localStorage
    const localValue = localStorage.getItem(LANGUAGE_COOKIE_KEY);
    if (localValue) return localValue as SupportedLanguage;

    return null;
  } catch (error) {
    console.warn('Language preference retrieval fallback:', error);
    return null;
  }
};