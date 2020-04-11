import IGameState from '@/types/gameState';

interface ILevelData {
  gameState: IGameState;
  stars: {
    1: number;
    2: number;
    3: number;
  };
}

export default ILevelData;
