import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TableFooter,
  Pagination,
} from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BarraDePesquisa } from '../../shared/components/BarraDeBusca';
import { BarraDeFiltragem } from '../../shared/components/BarraDeFiltragem';
import { Environment } from '../../shared/environments';
import { LayoutBase } from '../../shared/layouts/LayoutBase';
import {
  IListagemLivros,
  LivrosService,
} from '../../shared/services/api/LivrosService';

export const Dashboard = () => {
  const [rows, setRows] = useState<IListagemLivros[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();

  const [anoInicial, setAnoInicial] = useState('');
  const [anoFinal, setAnoFinal] = useState('');

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  const pagina = useMemo(() => {
    return Number(searchParams.get('pagina') || '1');
  }, [searchParams]);

  const from = useMemo(() => {
    return Number(searchParams.get('start')).toString() || '';
  }, [searchParams]);

  const to = useMemo(() => {
    return Number(searchParams.get('final')).toString() || '';
  }, [searchParams]);

  useEffect(() => {
    LivrosService.getAll(pagina, busca, from, to).then((result) => {
      if (result instanceof Error) {
        alert(result.message);
      } else {
        console.log(result);

        setRows(result.data);
        setTotalCount(result.totalCount);
      }
    });
  }, [busca, pagina, from, to]);

  const filtrarPorAno = (dataInicial: string, dataFinal: string) => {
    if (dataInicial && dataFinal) {
      if (dataInicial < dataFinal) {
        setSearchParams(
          { from: dataInicial, to: dataFinal, pagina: '1' },
          { replace: true }
        );
      }
    }
  };

  return (
    <LayoutBase
      barraDePesquisa={
        <BarraDePesquisa
          aoMudarTextoDaBusca={(texto) =>
            setSearchParams({ busca: texto, pagina: '1' }, { replace: true })
          }
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
          aoClicarEmFiltrar={() => filtrarPorAno(anoInicial, anoFinal)}
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
            {rows.map((row) => (
              <TableRow key={row.title}>
                <TableCell>{row.title}</TableCell>
                <TableCell>
                  {row.author === 'Unknown' ? 'Desconhecido' : row.author}
                </TableCell>
                <TableCell>{row.language}</TableCell>
                <TableCell>{row.year}</TableCell>
                <TableCell>
                  {
                    <Button
                      variant="text"
                      onClick={() => console.log(row.title)}
                    >
                      Detalhes
                    </Button>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          {totalCount === 0 && <caption>{Environment.LISTAGEM_VAZIA}</caption>}
          <TableFooter>
            {totalCount > 0 && totalCount > Environment.LIMITE_DE_LINHAS && (
              <TableRow>
                <TableCell colSpan={3}>
                  <Pagination
                    page={pagina}
                    count={Math.ceil(totalCount / Environment.LIMITE_DE_LINHAS)}
                    onChange={(e, newPage) =>
                      setSearchParams({ busca, pagina: newPage.toString() })
                    }
                  />
                </TableCell>
              </TableRow>
            )}
          </TableFooter>
        </Table>
      </TableContainer>
    </LayoutBase>
  );
};
