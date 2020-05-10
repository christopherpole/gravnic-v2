import ILevelData from '@/types/levelData';
import IGameState from '@/types/gameState';

interface IGame {
  gameStateHistory: IGameState[][];
  entitiesMoving: boolean;
  levelLoaded: boolean;
  undoing: boolean;
  selectedLevelIndex: number | null;
  levels: ILevelData[];
}

export default IGame;
