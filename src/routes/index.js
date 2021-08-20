// Dependencies
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Page404 from '../pages/Page404';

export default function App() {
  return (
    <Router basename="/">
      
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/404">
            <Page404 />
          </Route>

          <Redirect to="/404" />
        </Switch>
    </Router>
  );
}
