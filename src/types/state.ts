import IGameState from '@/types/gameState';
import ILevelData from '@/types/levelData';
import IColorScheme from './colorScheme';

interface ILevelDataWithColorScheme extends ILevelData {
  colorScheme: IColorScheme;
}

interface IState {
  levels: ILevelDataWithColorScheme[];
  gameStateHistory: IGameState[][];
  entitiesMoving: boolean;
  levelLoaded: boolean;
  undoing: boolean;
  selectedLevelId: string;
  showingSettings: boolean;
  fastMode: boolean;
}

export default IState;
