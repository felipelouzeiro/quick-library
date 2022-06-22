import { ThemeProvider } from '@emotion/react';
import { Dashboard } from './pages';
import { ThemeBasic } from './shared/themes';

export const App = () => {
  return (
    <ThemeProvider theme={ThemeBasic}>
      <Dashboard />
    </ThemeProvider>
  );
};
