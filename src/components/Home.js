import React from 'react';
import useFetch from '../Hooks/useFetch';
import SearchIcon from '@mui/icons-material/Search';
import LoadingImg from '../assets/img/loading.gif';
import { TextField, IconButton } from '@mui/material';
import {
  Conteudo,
  Logo,
  Pesquisar,
  SemImg,
  Book,
  BookConteudo,
} from '../assets/styles/ConteudoStyle';

const Home = () => {
  const [pesquisa, setPesquisa] = React.useState('');
  const { request, dados, loading, error } = useFetch();

  async function hadleSubmit(event) {
    event.preventDefault();
    request(`https://www.googleapis.com/books/v1/volumes?q=${pesquisa}`, []);
  }
  return (
    <div>
      <Pesquisar onSubmit={hadleSubmit}>
        <TextField
          style={{ width: '100%', maxWidth: '500px' }}
          type="text"
          id="pesquisa"
          name="pesquisa"
          label="Pesquise seu livro"
          value={pesquisa}
          onChange={(event) => setPesquisa(event.target.value)}
        />
        <IconButton
          style={{ width: '60px' }}
          color="primary"
          aria-label="upload picture"
          type="submit"
        >
          <SearchIcon />
        </IconButton>
      </Pesquisar>
      <Conteudo>
        {!loading && error && error}
        {loading && <Logo src={LoadingImg} alt="" />}
        {dados &&
          !loading &&
          dados.map((livros) => (
            <Book key={livros.id}>
              {dados && livros.volumeInfo.imageLinks ? (
                <img src={livros.volumeInfo.imageLinks.smallThumbnail} alt="" />
              ) : (
                <SemImg>Sem Imagem</SemImg>
              )}
              <BookConteudo>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={`https://books.google.com/ebooks?id=${livros.id}`}
                >
                  <h3>
                    {livros.volumeInfo.title
                      ? livros.volumeInfo.title
                      : 'Sem dados'}
                  </h3>
                </a>
                <a rel="noreferrer" target="_blank" href={livros.id}>
                  <h4>
                    {livros.volumeInfo.authors
                      ? livros.volumeInfo.authors
                      : 'Sem dados'}
                  </h4>
                </a>
                <p>
                  {livros.volumeInfo.description
                    ? livros.volumeInfo.description
                    : 'Sem dados'}
                </p>
              </BookConteudo>
            </Book>
          ))}
      </Conteudo>
    </div>
  );
};

export default Home;
