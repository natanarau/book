import styled from 'styled-components';

const Conteudo = styled.div`
  display: grid;
  justify-content: center;
  a {
    text-decoration-line: none;
  }
  a:hover {
    text-decoration-line: underline;
  }
`;

const Logo = styled.img`
  width: 150px;
`;

const Pesquisar = styled.form`
  display: flex;
  justify-content: center;
  margin-left: 35px;
`;

const SemImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 128px;
  height: 204px;
  border: 1px solid #c7c7c7;
  color: #565656;
  margin: 20px;
`;

const Book = styled.div`
  display: flex;
  img {
    margin: 20px;
  }
`;

const BookConteudo = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    margin: 0;
    font-size: 14px;
  }
  p {
    max-width: 500px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    font-size: 15px;
  }
`;

export { Conteudo, Logo, Pesquisar, SemImg, Book, BookConteudo };
