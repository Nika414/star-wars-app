import { NavLink } from 'react-router-dom';
import { routeName } from '../../utils/constants';

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink
            exact
            to={routeName.home}
            className={(isActive) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`}
          >
            Home

          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to={routeName.characters}
            className={(isActive) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`}
          >
            Characters

          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
