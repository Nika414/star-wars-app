import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import { routeName } from '../../utils/constants';
import Characters from '../Characters/Characters';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={routeName.home}>
          <Intro />
        </Route>
        <Route exact path={routeName.characters}>
          <Characters />
        </Route>
        <Route path="*">
          <Redirect to={routeName.pageNotFound} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
