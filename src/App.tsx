import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { ThemeBasic } from './shared/themes';

export const App = () => {
  return (
    <ThemeProvider theme={ThemeBasic}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};
