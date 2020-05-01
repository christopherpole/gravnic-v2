import IGameState from '@/types/gameState';

interface ILevelData {
  gameState: IGameState;
  stars: [number, number, number];
}

export default ILevelData;
