import logo from '../../images/Logo.svg';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <Navigation />
    </header>
  );
}
