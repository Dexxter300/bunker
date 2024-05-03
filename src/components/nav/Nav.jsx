import { NavLink } from 'react-router-dom';
import css from './nav.module.css';

export const Nav = () => {
  return (
    <>
      <div className={css.countainer}>
        <ul className={css.list}>
          <li>
            <NavLink className={css.link} to="/">
              Bunker
            </NavLink>
          </li>
          <li>
            <NavLink className={css.link} to="/mafia">
              Mafia
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
