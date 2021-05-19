import {
  Route,
  Switch,
  BrowserRouter as Router,
  useLocation,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Header from '@/components/Header';
import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';
import routes from '@/routes.json';
import store from '@/store';

const generatedRoutes = generateRoutes();

interface RouteInterface {
  path: string;
  component: string;
  props?: object;
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <Content />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

function Content() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Switch location={location} key={location.key}>
        {generatedRoutes}
      </Switch>
    </>
  );
}

function generateRoutes() {
  return routes.map((route: RouteInterface, index) => {
    const { path, component, props: routeProps } = route;
    const Component = require(`@/pages/${component}/index`).default;
    return (
      <Route
        exact
        path={path}
        render={(props) => <Component {...props} {...routeProps} />}
        key={`route-${index}`}
      />
    );
  });
}

export default App;
