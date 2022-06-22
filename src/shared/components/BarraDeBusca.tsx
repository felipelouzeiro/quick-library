import {
  Box,
  Button,
  Icon,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Environment } from '../environments';

interface IBarraDePesquisaProps {
  textoDaBUsca?: string;
  aoMudarTextoDaBusca?: (novoTexto: string) => void;
  aoClicarEmPesquisar: () => void;
}

export const BarraDePesquisa: React.FC<IBarraDePesquisaProps> = ({
  textoDaBUsca = '',
  aoMudarTextoDaBusca,
  aoClicarEmPesquisar,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display={'flex'}
      alignItems={'center'}
      height={theme.spacing(5)}
      component={Paper}
    >
      <Box flex={1} display="flex" justifyContent="start">
        <Typography
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          sx={{ color: theme.palette.secondary.main }}
        >
          beon
        </Typography>
      </Box>

      <TextField
        size="small"
        fullWidth
        placeholder={Environment.INPUT_DE_BUSCA}
        value={textoDaBUsca}
        onChange={(e) => aoMudarTextoDaBusca?.(e.target.value)}
      />

      <Box flex={1} display="flex" justifyContent="end">
        <Button
          variant="outlined"
          disableElevation
          color="primary"
          onClick={aoClicarEmPesquisar}
          endIcon={<Icon>search</Icon>}
        >
          Buscar
        </Button>
      </Box>
    </Box>
  );
};
