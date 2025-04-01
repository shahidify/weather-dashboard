import { Box, Card, CardContent, Typography, Grid, Divider } from '@mui/material';
import { useWeatherContext } from '../context/WeatherContext';

export const CurrentWeather = () => {
  const { weatherData } = useWeatherContext();

  if (!weatherData) return null;

  const { location, current } = weatherData;

  return (
    <Card elevation={3} sx={{ mb: 4, borderRadius: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box>
            <Typography variant="h4">{location.name}</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {location.country}
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="h3">{current.temp_c}°C</Typography>
            <Typography variant="subtitle1">Feels like {current.feelslike_c}°C</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <img 
            src={current.condition.icon} 
            alt={current.condition.text} 
            width={64} 
            height={64} 
          />
          <Typography variant="h6" sx={{ ml: 1 }}>
            {current.condition.text}
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={2}>
          <Grid size={{ xs: 6, sm: 3 }}>
            <Typography variant="body2" color="text.secondary">Humidity</Typography>
            <Typography variant="body1">{current.humidity}%</Typography>
          </Grid>
          <Grid size={{ xs: 6, sm: 3 }}>
            <Typography variant="body2" color="text.secondary">Wind</Typography>
            <Typography variant="body1">{current.wind_kph} km/h</Typography>
          </Grid>
          <Grid size={{ xs: 6, sm: 3 }}>
            <Typography variant="body2" color="text.secondary">UV Index</Typography>
            <Typography variant="body1">{current.uv}</Typography>
          </Grid>
          <Grid size={{ xs: 6, sm: 3 }}>
            <Typography variant="body2" color="text.secondary">Temperature</Typography>
            <Typography variant="body1">{current.temp_f}°F | {current.temp_c}°C</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

