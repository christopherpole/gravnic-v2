import { Audio } from 'expo-av';

import ISound from '@/types/sound';
import soundMove from '@/assets/sfx/move.mp3';
import soundMatch from '@/assets/sfx/match.mp3';

const sounds = {
  move: new Audio.Sound(),
  match: new Audio.Sound(),
};

export const loadSounds = async () => {
  await sounds.move.loadAsync(soundMove);
  await sounds.match.loadAsync(soundMatch);
};

export const playSound = async (sound: ISound) => {
  await sounds[sound].playFromPositionAsync(0);
};
