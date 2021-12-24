import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ContainerGrid from './assets/styles/ContainerStyle';

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
