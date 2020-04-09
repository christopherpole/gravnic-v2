import IGameState from '@/types/gameState';
import IEntityData from '@/types/entityData';
import { ENTITY_SIZE } from '@/config';

/**
 * Converts the given game state into entities data for use with the renderer
 * @param inputGameState The game state to convert to entities data
 * @returns The calculated entities data
 */
const getEntitiesDataFromGameState = (inputGameState: IGameState) => {
  const entitiesData: IEntityData[] = [];

  //  Add the static entities
  inputGameState.forEach((entityRow, i) => {
    entityRow.forEach((entityData, j) => {
      if (entityData.staticEntity) {
        entitiesData.push({
          id: entityData.staticEntity.id,
          x: j * ENTITY_SIZE,
          y: i * ENTITY_SIZE,
        });
      }
    });
  });

  //  Add the movable entities
  inputGameState.forEach((entityRow, i) => {
    entityRow.forEach((entityData, j) => {
      if (entityData.movableEntity) {
        entitiesData.push({
          id: entityData.movableEntity.id,
          x: j * ENTITY_SIZE,
          y: i * ENTITY_SIZE,
          fading: entityData.movableEntity.fading,
          color: entityData.movableEntity.color
            ? entityData.movableEntity.color.replace('#', '0x')
            : undefined,
        });
      }
    });
  });

  return entitiesData;
};

export default getEntitiesDataFromGameState;
