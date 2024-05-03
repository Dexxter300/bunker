import { useState, useEffect } from 'react';
import { randomizeBunker } from 'components/bunkerRandom';
import { Card } from 'components/card/card';
import { generateStory } from 'utiles/storyGenerator';
import css from './form.module.css';

export const Form = () => {
  const [number, setNumber] = useState(5);
  const [gameStarted, setGameStarted] = useState(false);
  const cardsData = localStorage.getItem('cardsData');
  const backstoryData = JSON.parse(localStorage.getItem('backstoryData'));
  const handlePlayerNumberChange = e => {
    setNumber(e.target.value);
  };

  useEffect(() => {
    // console.log(localStorage.getItem('lalala'));
    if (JSON.parse(cardsData) && backstoryData) {
      setGameStarted(true);
      return;
    }
    setGameStarted(false);
  }, [gameStarted, cardsData, backstoryData]);

  const handleSubmit = (e, number) => {
    e.preventDefault();
    if (number <= 0) {
      console.log('niggaaaa');
      return;
    }

    console.log(number);
    localStorage.setItem(
      'cardsData',
      JSON.stringify(randomizeBunker({ players: number }))
    );
    localStorage.setItem(
      'backstoryData',
      JSON.stringify(generateStory({ players: number }))
    );
    console.log(localStorage.getItem('cardsData'));
    setGameStarted(true);
  };

  const handleEndGame = () => {
    setGameStarted(false);
    localStorage.removeItem('cardsData');
    localStorage.removeItem('backstoryData');
  };
  // const handleReroll = () => {
  //   localStorage.setItem(
  //     'cardsData',
  //     JSON.stringify(randomizeBunker({ players: JSON.parse(cardsData).length }))
  //   );
  //   setGameStarted(false);
  //   setGameStarted(true);
  // };
  return (
    <>
      {!gameStarted && (
        <form className={css.form} onSubmit={e => handleSubmit(e, number)}>
          <span className={css.label}>Enter amount of players</span>
          <label>
            <input
              className={css.input}
              type="number"
              pattern="[1-9]"
              required
              onChange={handlePlayerNumberChange}
            />
          </label>
          <button className={css.createButton} type="submit">
            Create
          </button>
        </form>
      )}
      {gameStarted && (
        <div className={css.gameContainer}>
          <div>
            <div className={css.backstoryCard}>
              <h2>Backstory</h2>
              <p className={css.backstoryText}>{backstoryData.backstory}</p>
              <h2>Abot Bunker</h2>
              <p className={css.backstoryText}>
                Бункер {backstoryData.bunkerArea}м2 предназначен на{' '}
                {backstoryData.playersQuota} человек и имеет комнаты:{' '}
                {backstoryData.bunkerRooms.map(room => {
                  return <>{room + ', '}</>;
                })}
              </p>
            </div>
            <ul className={css.cardsList}>
              {JSON.parse(cardsData).map((card, i) => {
                return <Card data={card} key={i} playerNumber={i + 1} />;
              })}
            </ul>
          </div>
          <button className={css.button} type="button" onClick={handleEndGame}>
            end game
          </button>
        </div>
      )}
    </>
  );
};
