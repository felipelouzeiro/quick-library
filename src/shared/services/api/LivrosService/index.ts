import { Environment } from '../../../environments';
import { Api } from '../axios-config';

export interface IListagemLivros {
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
}

type ILivrosComTotalCount = {
  data: IListagemLivros[];
  totalCount: number;
};
const getAll = async (
  page = 1,
  filter = '',
  from = '',
  to = ''
): Promise<ILivrosComTotalCount | Error> => {
  try {
    const urlRelativa = `/books?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&title_like=${filter}&year_gte${from}&year_lte${to}`;

    const { data, headers } = await Api.get(urlRelativa);

    if (data) {
      return {
        data,
        totalCount: Number(
          headers['x-total-count'] || Environment.LIMITE_DE_LINHAS
        ),
      };
    }

    return new Error('Erro ao listar os livros');
  } catch (error) {
    return new Error(
      (error as { message: string }).message || 'Erro ao listar os livros'
    );
  }
};

export const LivrosService = {
  getAll,
};
