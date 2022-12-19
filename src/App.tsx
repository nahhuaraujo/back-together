import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as S from './App.styled';
import { Header } from './components';
import { Home, Login, NotFound } from './pages';
import store from './redux/store';

const App = () => {
  return (
    <S.App>
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </Provider>
    </S.App>
  );
};

export default App;
