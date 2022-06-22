import { Box } from '@mui/system';

interface ILayoutBaseProps {
  children: React.ReactNode;
}

export const LayoutBase: React.FC<ILayoutBaseProps> = ({ children }) => {
  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};
