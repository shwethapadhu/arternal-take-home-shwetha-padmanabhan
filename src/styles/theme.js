import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  spacing: 8,
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#00ff00',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;