import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { BarraDePesquisa } from '../../shared/components/BarraDeBusca';
import { BarraDeFiltragem } from '../../shared/components/BarraDeFiltragem';
import { LayoutBase } from '../../shared/layouts/LayoutBase';

export const Dashboard = () => {
  const [busca, setBusca] = useState('');
  const [anoInicial, setAnoInicial] = useState('');
  const [anoFinal, setAnoFinal] = useState('');

  const theme = useTheme();

  return (
    <LayoutBase
      barraDePesquisa={
        <BarraDePesquisa
          aoMudarTextoDaBusca={(texto) => setBusca(texto)}
          aoClicarEmPesquisar={() => console.log(busca)}
          textoDaBUsca={busca}
        />
      }
      barraDeFiltragem={
        <BarraDeFiltragem
          anoInicialDaBusca={anoInicial}
          anoFinalDaBusca={anoFinal}
          aoMudarAnoInicialDaBusca={(ano) => setAnoInicial(ano)}
          aoMudarAnoFinalDaBusca={(ano) => setAnoFinal(ano)}
          aoClicarEmFiltrar={() => console.log(anoInicial, anoFinal)}
        />
      }
    >
      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{ margin: 1, width: 'auto' }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Livro</TableCell>
              <TableCell>Autor</TableCell>
              <TableCell>Idioma</TableCell>
              <TableCell>Ano</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Narnia</TableCell>
              <TableCell>Autor legal</TableCell>
              <TableCell>Inglês</TableCell>
              <TableCell>2000</TableCell>
              <TableCell>Detalhe</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </LayoutBase>
  );
};
