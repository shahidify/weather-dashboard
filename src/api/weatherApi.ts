import { WeatherData } from '../types/weather';

const API_KEY = ''; // Replace with your actual API key
const BASE_URL = 'https://api.weatherapi.com/v1';

export const fetchWeatherData = async(location: string): Promise<WeatherData> => {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=7&aqi=no&alerts=no`
    );
  
  
    if(!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error.message || 'Failed');
    }
  
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Weather data fetch failed: ${error.message}`);
    }
    throw new Error('An unknown error occurred');
  }
}