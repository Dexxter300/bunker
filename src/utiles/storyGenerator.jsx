import data from 'data';
import { getRndInteger } from './randomazier';

const calculateBunkerRooms = ({ area }) => {
  const amountOfRooms = Math.round(area / 20);
  const result = [];
  for (let i = 0; i < amountOfRooms; i++) {
    result.push(data.roomTypes[getRndInteger(data.roomTypes.length)]);
  }
  return result;
};

export const generateStory = players => {
  const backstory = data.backstories[getRndInteger(data.backstories.length)];
  const playersQuota = Math.round(
    (players.players / 100) * 55 + Math.random() - Math.random()
  );
  const bunkerArea = Math.round(playersQuota * 30 * Math.random() + 20);
  const bunkerRooms = calculateBunkerRooms({ area: bunkerArea });

  return {
    backstory,
    playersQuota,
    bunkerArea,
    bunkerRooms,
  };
};
