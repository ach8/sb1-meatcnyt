import React from 'react';
import { useLanguageDetection } from '../../hooks/useLanguageDetection';
import LanguageNotification from './LanguageNotification';

interface LanguageProviderProps {
  children: React.ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { 
    isLoading, 
    currentLanguage, 
    showNotification, 
    hideNotification 
  } = useLanguageDetection();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500" />
      </div>
    );
  }

  return (
    <>
      {showNotification && (
        <LanguageNotification
          detectedLanguage={currentLanguage}
          onClose={hideNotification}
        />
      )}
      {children}
    </>
  );
};

export default LanguageProvider;