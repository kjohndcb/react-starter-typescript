import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from '@/components/Header';
import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';
import routes from '@/routes.json';

interface RouteInterface {
  path: string;
  component: string;
  props?: object;
}

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <Route
            render={({ location }) => (
              <>
                <Header />
                <Switch location={location}>{generateRoutes()}</Switch>
              </>
            )}
          />
        </Router>
      </ThemeProvider>
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
