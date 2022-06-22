import { useState } from 'react';
import { BarraDePesquisa } from '../../shared/components/BarraDeBusca';
import { LayoutBase } from '../../shared/layouts/LayoutBase';

export const Dashboard = () => {
  const [busca, setBusca] = useState('');

  return (
    <LayoutBase
      barraDePesquisa={
        <BarraDePesquisa
          aoMudarTextoDaBusca={(texto) => setBusca(texto)}
          aoClicarEmPesquisar={() => console.log(busca)}
          textoDaBUsca={busca}
        />
      }
    >
      tabela
    </LayoutBase>
  );
};
