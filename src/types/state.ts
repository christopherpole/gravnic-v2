import IGameState from '@/types/gameState';

interface IState {
  gameStateHistory: IGameState[][];
  entitiesMoving: boolean;
  levelLoaded: boolean;
}

export default IState;
