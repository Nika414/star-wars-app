import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import { routeName } from '../../utils/constants';
import CardList from '../CardList/CardList';
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
          <CardList />
        </Route>
        <Route path="*">
          <Redirect to={routeName.pageNotFound} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
