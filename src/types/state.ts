import IGameState from '@/types/gameState';
import ILevelData from '@/types/levelData';
import LanguageCodes from '@/types/languageCodes';
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
  selectedLevelId: string | null;
  showingSettings: boolean;
  fastMode: boolean;
  locale: LanguageCodes;
}

export default IState;
