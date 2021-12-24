import React from 'react';

const useFetch = () => {
  const [dados, setDados] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function request(url, options) {
    try {
      setLoading(true);
      const response = await fetch(url, options);
      const json = await response.json();
      setDados(json.items);
      setLoading(false);
    } catch (erro) {
      setError('Algo deu errado, tente novamente em alguns minutos');
      setLoading(false);
    }
  }

  return { dados, error, loading, request };
};

export default useFetch;
