import { ThemeProvider } from '@emotion/react';
import { Button, TextField, Typography } from '@mui/material';
import { ThemeBasic } from './shared/themes';

export const App = () => {
  return (
    <ThemeProvider theme={ThemeBasic}>
      <Button>inicio</Button>
      <Typography variant="h1">inicio</Typography>
      <Typography>inicio</Typography>
    </ThemeProvider>
  );
};
