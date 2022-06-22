import {
  Box,
  Button,
  Icon,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from '@mui/material';

interface IBarraDeFiltragemProps {
  anoInicialDaBusca?: string;
  anoFinalDaBusca?: string;
  aoMudarAnoInicialDaBusca?: (novoTexto: string) => void;
  aoMudarAnoFinalDaBusca?: (novoTexto: string) => void;
  aoClicarEmFiltrar: () => void;
}

export const BarraDeFiltragem: React.FC<IBarraDeFiltragemProps> = ({
  anoInicialDaBusca = '',
  anoFinalDaBusca = '',
  aoMudarAnoInicialDaBusca,
  aoMudarAnoFinalDaBusca,
  aoClicarEmFiltrar,
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
        <Select
          size="small"
          value={anoInicialDaBusca}
          fullWidth
          onChange={(e) => aoMudarAnoInicialDaBusca?.(e.target.value)}
        >
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
        </Select>
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
        <Select
          size="small"
          fullWidth
          value={anoFinalDaBusca}
          onChange={(e) => aoMudarAnoFinalDaBusca?.(e.target.value)}
        >
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
        </Select>
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
          100 Resultados encontrados
        </Typography>
      </Box>
    </Box>
  );
};
