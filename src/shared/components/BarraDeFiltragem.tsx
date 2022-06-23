import {
  Box,
  Button,
  Icon,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';

interface IBarraDeFiltragemProps {
  anoInicialDaBusca?: string;
  anoFinalDaBusca?: string;
  aoMudarAnoInicialDaBusca?: (novoTexto: string) => void;
  aoMudarAnoFinalDaBusca?: (novoTexto: string) => void;
  aoClicarEmFiltrar: () => void;
  totalResultados: number;
}

export const BarraDeFiltragem: React.FC<IBarraDeFiltragemProps> = ({
  anoInicialDaBusca = '',
  anoFinalDaBusca = '',
  aoMudarAnoInicialDaBusca,
  aoMudarAnoFinalDaBusca,
  aoClicarEmFiltrar,
  totalResultados = 0,
}) => {
  const theme = useTheme();

  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display={'flex'}
      alignItems={'center'}
      height={theme.spacing(5)}
    >
      <Box display="flex" justifyContent="start">
        <Typography
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          Filtrar ano da publicação:
        </Typography>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        alignContent="center"
        sx={{ margin: 1, minWidth: 120, gap: theme.spacing(1) }}
      >
        <TextField
          size="small"
          value={anoInicialDaBusca}
          fullWidth
          onChange={(e) => aoMudarAnoInicialDaBusca?.(e.target.value)}
        ></TextField>
        <Icon>calendar_month</Icon>
      </Box>

      <Box display="flex" justifyContent="start">
        <Typography
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          Até
        </Typography>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        alignContent="center"
        sx={{ margin: 1, minWidth: 120, gap: theme.spacing(1) }}
      >
        <TextField
          size="small"
          fullWidth
          value={anoFinalDaBusca}
          onChange={(e) => aoMudarAnoFinalDaBusca?.(e.target.value)}
        ></TextField>
        <Icon>calendar_month</Icon>
      </Box>

      <Box>
        <Button
          variant="text"
          disableElevation
          color="primary"
          onClick={aoClicarEmFiltrar}
        >
          Filtrar
        </Button>
      </Box>

      <Box flex={1} display="flex" justifyContent="end">
        <Typography
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {totalResultados} Resultados encontrados
        </Typography>
      </Box>
    </Box>
  );
};
