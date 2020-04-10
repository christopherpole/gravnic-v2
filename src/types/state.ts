import IGameState from '@/types/gameState';

interface IState {
  gameStateHistory: IGameState[][];
  entitiesMoving: boolean;
  levelLoaded: boolean;
  undoing: boolean;
}

export default IState;
