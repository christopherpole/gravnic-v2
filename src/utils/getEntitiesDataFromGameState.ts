import IGameState from '@/types/gameState';
import IEntityData from '@/types/entityData';
import { ENTITY_SIZE } from '@/config';
import IColorScheme from '@/types/colorScheme';

/**
 * Converts the given game state into entities data for use with the renderer
 * @param inputGameState The game state to convert to entities data
 * @param colorScheme The color scheme to convert the block colors
 * @returns The calculated entities data
 */
const getEntitiesDataFromGameState = (
  inputGameState: IGameState,
  colorScheme: IColorScheme,
) => {
  const entitiesData: IEntityData[] = [];

  //  Add the static entities
  inputGameState.forEach((entityRow, i) => {
    entityRow.forEach((entityData, j) => {
      if (entityData.staticEntity) {
        entitiesData.push({
          type: entityData.staticEntity.entityId,
          id: entityData.staticEntity.id,
          x: j * ENTITY_SIZE,
          y: i * ENTITY_SIZE,
          shrinking: entityData.staticEntity.shrinking,
        });
      }
    });
  });

  //  Add the movable entities
  inputGameState.forEach((entityRow, i) => {
    entityRow.forEach((entityData, j) => {
      if (entityData.movableEntity) {
        entitiesData.push({
          type: entityData.movableEntity.entityId,
          id: entityData.movableEntity.id,
          x: j * ENTITY_SIZE,
          y: i * ENTITY_SIZE,
          fading: entityData.movableEntity.fading,
          color: entityData.movableEntity.color
            ? colorScheme.blocks[entityData.movableEntity.color].replace(
                '#',
                '0x',
              )
            : undefined,
          shrinking: entityData.movableEntity.shrinking,
          stuck: entityData.movableEntity.stuck,
        });
      }
    });
  });

  return entitiesData;
};

export default getEntitiesDataFromGameState;
