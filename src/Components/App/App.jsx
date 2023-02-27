import {
  Switch, Route, Redirect, useLocation,
} from 'react-router-dom';
import { routeName } from '../../utils/constants';
import Characters from '../Characters/Characters';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  const location = useLocation();
  const isHeaderRequired = location.pathname !== routeName.pageNotFound;

  return (

    <div className="App">
      {isHeaderRequired && <Header />}
      <Switch>
        <Route exact path={routeName.home}>
          <Intro />
        </Route>
        <Route exact path={routeName.characters}>
          <Characters />
        </Route>
        <Route path={routeName.pageNotFound}>
          <PageNotFound />
        </Route>
        <Route path="*">
          <Redirect to={routeName.pageNotFound} />
        </Route>
      </Switch>
    </div>

  );
}

export default App;
