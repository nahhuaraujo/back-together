import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as S from './App.styled';
import { Header } from './components';
import { AuthGuard } from './guards';
import { CreateReport, Home, Login, NotFound } from './pages';
import store from './redux/store';
import { PrivateRoutes, PublicRoutes } from './routes';

const App = () => {
  return (
    <S.App>
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path={PublicRoutes.HOME} element={<Home />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route element={<AuthGuard />}>
              <Route path={PrivateRoutes.CREATE_REPORT} element={<CreateReport />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </Provider>
    </S.App>
  );
};

export default App;
