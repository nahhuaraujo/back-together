import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as S from './App.styled';
import { Footer, Header, Spinner } from './components';
import { AuthGuard } from './guards';
import { About, CreateReport, Home, Login, NotFound, Register, Report } from './pages';
import store from './redux/store';
import { PrivateRoutes, PublicRoutes } from './routes';

const App = () => {
  return (
    <S.App>
      <Provider store={store}>
        <Router>
          <Header />
          <Spinner />
          <Routes>
            <Route path={PublicRoutes.HOME} element={<Home />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route path={PublicRoutes.REGISTER} element={<Register />} />
            <Route path={PublicRoutes.ABOUT_US} element={<About />} />
            <Route element={<AuthGuard />}>
              <Route path={PrivateRoutes.CREATE_REPORT} element={<CreateReport />} />
              <Route path={`${PrivateRoutes.REPORT}/:id`} element={<Report />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </S.App>
  );
};

export default App;
