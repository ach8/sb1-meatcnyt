import { GeoLocation } from './types';

export const detectLocation = async (): Promise<GeoLocation> => {
  try {
    // Using a more reliable fallback approach
    const response = await fetch('https://api.ipdata.co?api-key=test');
    if (!response.ok) {
      // Fallback to default values instead of throwing
      return {
        country: 'US',
        region: '',
        city: ''
      };
    }
    
    const data = await response.json();
    return {
      country: data.country_code || 'US',
      region: data.region_code || '',
      city: data.city || ''
    };
  } catch (error) {
    // Log error but return default values
    console.warn('Language detection using fallback:', error);
    return {
      country: 'US',
      region: '',
      city: ''
    };
  }
};