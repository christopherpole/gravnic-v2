import IGameState from '@/types/gameState';
import ITutorial from '@/types/tutorial';

interface ILevelData {
  tutorial?: ITutorial;
  gameState: IGameState;
  stars: [number, number, number];
}

export default ILevelData;
