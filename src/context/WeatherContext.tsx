import { createContext, useState, ReactNode, useContext } from 'react';
import { WeatherData } from '../types/weather';
import { fetchWeatherData } from '../api/weatherApi';

export interface WeatherContextType {
  weatherData: WeatherData | null;
  error: string | null;
  loading: boolean;
  searchLocation: (location: string) => Promise<void>;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const searchLocation = async (location: string) => {
    if (!location.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchWeatherData(location || 'London');
      setWeatherData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider value={{ weatherData, error, loading, searchLocation }}>
      {children}
    </WeatherContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error('useWeatherContext must be used within a WeatherProvider');
  }
  return context;
};