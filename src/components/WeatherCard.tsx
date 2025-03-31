import { Card, CardContent, Typography, Box } from '@mui/material';
import { ForecastDay } from '../types/weather';

interface WeatherCardProps {
  forecastDay: ForecastDay;
}

export const WeatherCard = ({ forecastDay }: WeatherCardProps) => {
  const date = new Date(forecastDay.date);
  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  return (
    <Card elevation={2}>
      <CardContent>
        <Typography variant='h6'>{formattedDate}</Typography>
        <Box>
        <Typography variant='body2'>{forecastDay.day.condition.text}</Typography>
        </Box>
      </CardContent>
    </Card>
  )


}
