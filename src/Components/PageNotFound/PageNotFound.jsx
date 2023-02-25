import { useHistory } from 'react-router-dom';
import shipLogo from '../../images/Ship.png';

export default function PageNotFound() {
  const history = useHistory();
  return (
    <div className="page-not-found">
      <span className="page-not-found__span">404</span>
      <img className="page-not-found__img" src={shipLogo} alt="404 logo" />
      <button className="page-not-found__button" type="button" onClick={history.goBack}>Return</button>
    </div>

  );
}
