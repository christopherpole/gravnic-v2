import IGameState from '@/types/gameState';

interface ILevelData {
  id: string;
  gameState: IGameState;
  stars: [number, number, number];
}

export default ILevelData;
