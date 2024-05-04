import { getRndInteger } from 'utiles/randomazier';
import data from '../data';

export const randomizeBunker = ({ players }) => {
  const result = [];
  for (let i = 0; i < players; i++) {
    console.log('nigga');
    result.push({
      age: data.age[getRndInteger(data.age.length)],
      name: data.names[getRndInteger(data.names.length)],
      occupation: data.occupation[getRndInteger(data.occupation.length)],
      health:
        Math.random() <= 0.7
          ? data.health[getRndInteger(data.health.length)]
          : 'здоров',
      inventory: data.items[getRndInteger(data.items.length)],
      wildcards: data.wildcards[getRndInteger(data.wildcards.length)],
      hobby: data.hobby[getRndInteger(data.hobby.length)],
      phobia: data.phobias[getRndInteger(data.phobias.length)],
      orientation:
        Math.random() <= 0.6
          ? data.orientation[getRndInteger(data.orientation.length)]
          : 'гетеро',
    });
  }
  return result;
};
