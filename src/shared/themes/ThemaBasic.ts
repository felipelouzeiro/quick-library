import { createTheme } from '@mui/material';
import { blueGrey, grey, purple } from '@mui/material/colors';

export const ThemeBasic = createTheme({
  palette: {
    primary: {
      main: blueGrey[700],
      contrastText: '#ffffff',
    },
    secondary: {
      main: purple[500],
      contrastText: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: grey[600],
    },
    background: {
      default: '#ffffff',
      paper: '#f7f6f3',
    },
  },
});
