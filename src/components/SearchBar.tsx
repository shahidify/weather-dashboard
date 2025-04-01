import { useState, FormEvent } from 'react';
import { TextField, Button, Box, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useWeatherContext } from '../context/WeatherContext';

export const SearchBar = () => {
  const [location, setLocation] = useState('');
  const { searchLocation, loading } = useWeatherContext();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    searchLocation(location);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        mb: 3,
        width: '100%',
        maxWidth: 600,
        mx: 'auto',
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Enter city or location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        disabled={loading}
        sx={{ bgcolor: 'background.paper' }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading || !location.trim()}
        startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SearchIcon />}
      >
        {loading ? 'Searching...' : 'Search'}
      </Button>
    </Box>
  );
};
