import { Box } from '@mui/system';

interface ILayoutBaseProps {
  children: React.ReactNode;
  barraDePesquisa?: React.ReactNode;
}

export const LayoutBase: React.FC<ILayoutBaseProps> = ({
  children,
  barraDePesquisa,
}) => {
  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box>{barraDePesquisa}</Box>
      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};
