import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { detectLocation } from '../services/languageDetection/api';
import { 
  getLanguageFromRegion,
  saveLanguagePreference,
  getStoredLanguagePreference,
} from '../services/languageDetection/utils';
import type { SupportedLanguage } from '../services/languageDetection/types';

export const useLanguageDetection = () => {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [detectedLanguage, setDetectedLanguage] = useState<SupportedLanguage>('en');

  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        // Check stored preference first
        const { language, isAutoDetected } = getStoredLanguagePreference();
        
        if (language) {
          await i18n.changeLanguage(language);
          setDetectedLanguage(language);
          setShowNotification(isAutoDetected);
          setIsLoading(false);
          return;
        }

        // Detect location and set language
        const location = await detectLocation();
        const detectedLang = getLanguageFromRegion(location);
        
        await i18n.changeLanguage(detectedLang);
        setDetectedLanguage(detectedLang);
        setShowNotification(true);
        saveLanguagePreference(detectedLang, true);
      } catch (error) {
        console.error('Language detection failed:', error);
        await i18n.changeLanguage('en');
        saveLanguagePreference('en', false);
      } finally {
        setIsLoading(false);
      }
    };

    initializeLanguage();
  }, [i18n]);

  const changeLanguage = async (language: SupportedLanguage) => {
    await i18n.changeLanguage(language);
    setDetectedLanguage(language);
    saveLanguagePreference(language, false);
    setShowNotification(false);
  };

  return {
    currentLanguage: detectedLanguage,
    changeLanguage,
    isLoading,
    showNotification,
    hideNotification: () => setShowNotification(false),
  };
};