import IGameState from '@/types/gameState';

interface IState {
  gameStateHistory: IGameState[][];
  entitiesMoving: boolean;
}

export default IState;
