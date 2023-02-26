import { Link } from 'react-router-dom';
import banner from '../../images/banner.svg';
import { routeName } from '../../utils/constants';

export default function Intro() {
  return (
    <section className="intro">
      <h1 className="intro__title">
        Find
        <span className="intro__span">
          {' all your favorite '}
        </span>
        character
      </h1>
      <h2 className="intro__subtitle">
        You can find out all the information about your favorite characters
      </h2>
      <Link className="intro__button intro__link" to={routeName.characters}>
        See more...
      </Link>
      <img className="intro__pic" src={banner} alt="banner" />
    </section>
  );
}
