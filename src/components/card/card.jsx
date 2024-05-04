import css from './card.module.css';
import { useState } from 'react';

export const Card = ({ data, playerNumber }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const handleUseClick = e => {
    e.target.innerText = 'used';
    setIsDisabled(true);
  };

  console.log(playerNumber);
  return (
    <li className={css.card}>
      <h3 className={css.player}>{playerNumber} Player</h3>
      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <p className={css.statsItemText}>name: {data.name}</p>
        </li>
        <li className={css.statsItem}>
          <p className={css.statsItemText}>
            age: {data.age} orientation: {data.orientation}
          </p>
        </li>
        {/* <li className={css.statsItem}>
          <p className={css.statsItemText}>orientation: {data.orientation}</p>
        </li> */}
        <li className={css.statsItem}>
          <p className={css.statsItemText}>health: {data.health}</p>
        </li>
        <li className={css.statsItem}>
          <p className={css.statsItemText}>occupation: {data.occupation}</p>
        </li>
        <li className={css.statsItem}>
          <p className={css.statsItemText}>inventory: {data.inventory}</p>
        </li>
        <li className={css.statsItem}>
          <p className={css.statsItemText}>hobby: {data.hobby}</p>
        </li>
        <li className={css.statsItem}>
          <p className={css.statsItemText}>phobia: {data.phobia}</p>
        </li>
      </ul>
      <ul className={css.abilytiesList}>
        <li className={css.abilytiesItem}>
          <h5 className={css.abilytiesTitle}>Карта действия</h5>
          <p className={css.abilytiesText}>{data.wildcards}</p>
          <button
            className={css.useButton}
            type="button"
            onClick={handleUseClick}
            disabled={isDisabled}
          >
            Use Card
          </button>
        </li>
      </ul>
    </li>
  );
};
