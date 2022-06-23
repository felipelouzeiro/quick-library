import { Dialog, Typography, useTheme, Grid, Box, Link } from '@mui/material';
import { IListagemLivros } from '../services/api/LivrosService';

interface IDetalheLivroProps {
  livro: IListagemLivros | null;
  setLivro: (livro: IListagemLivros | null) => void;
}

export const DetalhesDoLivro: React.FC<IDetalheLivroProps> = ({
  livro,
  setLivro,
}) => {
  const theme = useTheme();
  return (
    <Dialog open={livro != null} onClose={() => setLivro(null)}>
      <Grid container spacing={2}>
        <Grid item>
          <Box sx={{ width: theme.spacing(30), height: theme.spacing(25) }}>
            <img alt={livro?.title} src={livro?.imageLink} />
          </Box>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
                {livro?.title}
              </Typography>
              <Typography variant="subtitle2">{livro?.author}</Typography>
              <Typography variant="body2" color="text.secondary">
                Idioma: {livro?.language}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                País: {livro?.country}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lançamento: {livro?.year}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Nª Páginas: {livro?.pages}
              </Typography>
            </Grid>
            <Grid item>
              <Link href={livro?.link} underline="none">
                <Typography sx={{ cursor: 'pointer' }}>Veja mais</Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};
