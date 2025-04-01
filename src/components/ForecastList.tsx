
import { Box, Typography, Grid } from '@mui/material';
import { useWeatherContext } from '../context/WeatherContext';
import {WeatherCard} from './WeatherCard';

export const ForecastList = () => {
  const { weatherData } = useWeatherContext();

  if (!weatherData || !weatherData.forecast) return null;

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        7-Day Forecast
      </Typography>
      <Grid container spacing={2}>
        {weatherData.forecast.forecastday.map((day) => (
          <Grid size={{ xs: 12, sm: 6 }} key={day.date}>
            <WeatherCard forecastDay={day} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
