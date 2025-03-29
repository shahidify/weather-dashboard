
import { Box, Container, Typography, Alert } from '@mui/material';
import { useWeatherContext } from '../context/WeatherContext';
import {ForecastList} from './ForecastList';

export const WeatherDashboard = () => {
  const { weatherData, error, loading } = useWeatherContext();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Weather Dashboard
      </Typography>
      
      
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}
      
      {loading && !weatherData && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <Typography>Loading weather data...</Typography>
        </Box>
      )}
      
      {!weatherData && !loading && !error && (
        <Box sx={{ textAlign: 'center', my: 8 }}>
          <Typography variant="h6" color="text.secondary">
            Search for a location to see weather information
          </Typography>
        </Box>
      )}
      
      {weatherData && (
        <>
          <ForecastList />
        </>
      )}
    </Container>
  );
};
