// import { randomizeBunker } from './bunkerRandom';
// import { Card } from './card/card';
import { MafiaPage } from 'pages/mafia/mafiaPage';
import { BunkerPage } from 'pages/bunker/bunkerPage';
import { Layout } from 'Layout';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<BunkerPage />} />
        <Route path="mafia" element={<MafiaPage />} />
      </Route>
    </Routes>
    // <ul>
    //   {randomizeBunker({ players: 10 }).map(card => {
    //     return <Card data={card}></Card>;
    //   })}
    // </ul>
  );
};
