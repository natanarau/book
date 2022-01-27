import React from 'react';
import useFetch from '../Hooks/useFetch';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Pesquisar } from '../assets/styles/ConteudoStyle';

export default function Form() {
  const [pesquisa, setPesquisa] = React.useState('');
  const { request } = useFetch();

  async function hadleSubmit(event) {
    event.preventDefault();
    request(`https://www.googleapis.com/books/v1/volumes?q=${pesquisa}`, []);
  }
  return (
    <>
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
    </>
  );
}
