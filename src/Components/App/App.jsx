import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import { routeName } from '../../utils/constants';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={routeName.home} />
        <Route exact path={routeName.characters} />
        <Route path="*">
          <Redirect to={routeName.pageNotFound} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
