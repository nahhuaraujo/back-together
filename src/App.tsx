import * as S from './App.styled';
import { Header } from './components';
import { Home } from './pages';

const App = () => {
  return (
    <S.App>
      <Header />
      <Home />
    </S.App>
  );
};

export default App;
