import react from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ContainerGrid from './assets/styles/ContainerStyle';
import Style from './assets/styles/style.css';

const App = () => {
  return (
    <ContainerGrid>
      <Header />
      <Home />
      <Footer />
    </ContainerGrid>
  );
};

export default App;
