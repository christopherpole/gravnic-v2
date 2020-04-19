import IGameState from '@/types/gameState';

interface IState {
  gameStateHistory: IGameState[][];
  entitiesMoving: boolean;
  levelLoaded: boolean;
  undoing: boolean;
  selectedLevelId: string;
}

export default IState;
