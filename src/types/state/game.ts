import ILevelData from '@/types/levelData';
import IColorScheme from '@/types/colorScheme';
import IGameState from '@/types/gameState';

interface ILevelDataWithColorScheme extends ILevelData {
  colorScheme: IColorScheme;
}

interface IGame {
  gameStateHistory: IGameState[][];
  entitiesMoving: boolean;
  levelLoaded: boolean;
  undoing: boolean;
  selectedLevelId: string | null;
  levels: ILevelDataWithColorScheme[];
}

export default IGame;
