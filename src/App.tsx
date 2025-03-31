import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { WeatherProvider } from './context/WeatherContext';
import { WeatherDashboard } from './components/WeatherDashboard';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WeatherProvider>
        <WeatherDashboard />
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
