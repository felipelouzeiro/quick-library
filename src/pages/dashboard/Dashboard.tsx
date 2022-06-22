import { useState } from 'react';
import { BarraDePesquisa } from '../../shared/components/BarraDeBusca';
import { BarraDeFiltragem } from '../../shared/components/BarraDeFiltragem';
import { LayoutBase } from '../../shared/layouts/LayoutBase';

export const Dashboard = () => {
  const [busca, setBusca] = useState('');
  const [anoInicial, setAnoInicial] = useState('');
  const [anoFinal, setAnoFinal] = useState('');

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
      tabela
    </LayoutBase>
  );
};
