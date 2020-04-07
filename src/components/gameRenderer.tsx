import React from 'react';
import styled from 'styled-components';
import { PIXI } from 'expo-pixi';
import { GLView } from 'expo-gl';
import { useSelector } from 'react-redux';

import IState from '@/types/state';
import { ENTITY_SIZE, ENTITY_MOVE_SPEED, MAX_ENTITIES_COUNT } from '@/config';
import entitiesSpritesheet from '@/assets/entities.png';
import IEntityData from '@/types/entityData';
import getEntitiesDataFromGameState from '@/utils/getEntitiesDataFromGameState';

const Wrapper = styled(GLView)`
  aspect-ratio: 1;
  width: 100%;
`;

interface ISprites {
  [id: number]: {
    x: number;
    y: number;
  };
}

const entities: ISprites = {};
let entitiesData: IEntityData[];

const GameRenderer = () => {
  const gameState = useSelector((state: IState) => state.gameState);
  entitiesData = getEntitiesDataFromGameState(gameState);

  return (
    <Wrapper
      onContextCreate={async (context) => {
        const app = new PIXI.Application({
          context,
          antialias: true,
          resolution: 1,
          transparent: true,
        });

        const entitiesTexture = await PIXI.Texture.fromExpoAsync(
          entitiesSpritesheet,
        );

        //  Container for the entities
        const entitiesContainer = new PIXI.Container(MAX_ENTITIES_COUNT, {
          scale: false,
          position: false,
        });

        /**
         *  Renders the the entitiesSpritesheet based on the game state
         */
        const renderEntities = () => {
          entitiesData.forEach((entityData: IEntityData) => {
            const entitySprite = PIXI.Sprite.from(entitiesTexture);
            entitySprite.x = entityData.x;
            entitySprite.y = entityData.y;
            entitySprite.height = ENTITY_SIZE;
            entitySprite.width = ENTITY_SIZE;

            if (entityData.color) {
              entitySprite.tint = entityData.color;
            }

            entitiesContainer.addChild(entitySprite);
            entities[entityData.id] = entitySprite;
          });
        };

        const update = () => {
          entitiesData.forEach((entityData) => {
            if (entityData.x > entities[entityData.id].x) {
              entities[entityData.id].x += ENTITY_MOVE_SPEED;
            }
            if (entityData.x < entities[entityData.id].x) {
              entities[entityData.id].x -= ENTITY_MOVE_SPEED;
            }
            if (entityData.y < entities[entityData.id].y) {
              entities[entityData.id].y -= ENTITY_MOVE_SPEED;
            }
            if (entityData.y > entities[entityData.id].y) {
              entities[entityData.id].y += ENTITY_MOVE_SPEED;
            }
          });
        };

        renderEntities();

        //  Resize the entitiesSpritesheet container so that it fits on the screen
        const entitiesContainerAspectRatio =
          entitiesContainer.width / entitiesContainer.height;

        //  Resize if bigger than the x axis
        if (entitiesContainer.width > app.renderer.width) {
          entitiesContainer.width = app.renderer.width;
          entitiesContainer.height =
            app.renderer.width / entitiesContainerAspectRatio;
        }

        //  Resize if bigger than the y axis
        if (entitiesContainer.height > app.renderer.height) {
          entitiesContainer.height = app.renderer.height;
          entitiesContainer.width =
            app.renderer.height * entitiesContainerAspectRatio;
        }

        //  Centre the entitiesSpritesheet container
        entitiesContainer.x =
          app.renderer.width / 2 - entitiesContainer.width / 2;
        entitiesContainer.y =
          app.renderer.height / 2 - entitiesContainer.height / 2;

        //  Setup the game loop
        app.ticker.add(() => update());

        app.stage.addChild(entitiesContainer);
      }}
    />
  );
};

export default GameRenderer;
