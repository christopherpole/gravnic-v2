import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PIXI } from 'expo-pixi';
import { GLView } from 'expo-gl';
import { useSelector } from 'react-redux';

import IState from '@/types/state';
import {
  ENTITY_SIZE,
  ENTITY_MOVE_SPEED,
  ENTITY_FADE_SPEED,
  MAX_ENTITIES_COUNT,
} from '@/config';
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
    alpha: number;
  };
}

//  This needs to be kept here for it to work
let remainingEntitiesData: IEntityData[][] = [];

const GameRenderer = () => {
  const gameStateHistory = useSelector(
    (state: IState) => state.gameStateHistory,
  );

  useEffect(() => {
    //  Convert new game state moves to entities data to animate
    remainingEntitiesData = [
      ...gameStateHistory[gameStateHistory.length - 1],
    ].map((gameState) => getEntitiesDataFromGameState(gameState));
  }, [gameStateHistory]);

  const onGLContextCreate = async (context: any) => {
    const entitySprites: ISprites = {};
    let app: typeof PIXI.Application;
    let entitiesTexture: typeof PIXI.Texture;
    let entitiesContainer: typeof PIXI.Container;

    /**
     * Load assets to be used for the game
     */
    const loadAssets = async () => {
      entitiesTexture = await PIXI.Texture.fromExpoAsync(entitiesSpritesheet);
    };

    /**
     * Renders the entities for the first time
     */
    const renderEntities = () => {
      remainingEntitiesData[0].forEach((entityData) => {
        //  Create the sprite
        const entitySprite = PIXI.Sprite.from(entitiesTexture);

        //  Resize the sprite
        entitySprite.height = ENTITY_SIZE;
        entitySprite.width = ENTITY_SIZE;

        //  Position the sprite
        entitySprite.x = entityData.x;
        entitySprite.y = entityData.y;

        //  Colour the sprite if applicable
        if (entityData.color) {
          entitySprite.tint = entityData.color;
        }

        //  Add the sprite to the stage
        entitiesContainer.addChild(entitySprite);
        entitySprites[entityData.id] = entitySprite;
      });
    };

    /**
     * The update loop
     */
    const update = () => {
      if (!remainingEntitiesData.length) return;

      //  Move all of the entities where applicable
      let entitiesMoving = false;

      remainingEntitiesData[0].forEach((entityData) => {
        const currentEntitySprite = entitySprites[entityData.id];

        //  x-axis
        if (entityData.x > currentEntitySprite.x) {
          currentEntitySprite.x += ENTITY_MOVE_SPEED;
          entitiesMoving = true;
        } else if (entityData.x < currentEntitySprite.x) {
          currentEntitySprite.x -= ENTITY_MOVE_SPEED;
          entitiesMoving = true;
        }

        //  y-axis
        if (entityData.y < currentEntitySprite.y) {
          currentEntitySprite.y -= ENTITY_MOVE_SPEED;
          entitiesMoving = true;
        } else if (entityData.y > currentEntitySprite.y) {
          currentEntitySprite.y += ENTITY_MOVE_SPEED;
          entitiesMoving = true;
        }

        //  Opacity
        if (entityData.fading) {
          currentEntitySprite.alpha -= ENTITY_FADE_SPEED / ENTITY_SIZE;

          if (currentEntitySprite.alpha > 0) {
            entitiesMoving = true;
          }
        }
      });

      //  If entities have stopped moving then remove the current move from the stack
      if (!entitiesMoving) {
        remainingEntitiesData.shift();
        update();
      }
    };

    /**
     * Resize the entities container so that it fits on the screen
     */
    const resizeEntitiesContainer = () => {
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

      //  Centre the entities container
      entitiesContainer.x =
        app.renderer.width / 2 - entitiesContainer.width / 2;
      entitiesContainer.y =
        app.renderer.height / 2 - entitiesContainer.height / 2;
    };

    /**
     * Init the game
     */
    const init = async () => {
      //  Create the Pixi application
      app = new PIXI.Application({
        context,
        antialias: true,
        resolution: 1,
        transparent: true,
      });

      //  Load in any assets required
      await loadAssets();

      //  Create container for the entities
      entitiesContainer = new PIXI.Container(MAX_ENTITIES_COUNT, {
        scale: false,
        position: false,
      });

      //  Render the entities onto the stage
      renderEntities();
      resizeEntitiesContainer();
      app.stage.addChild(entitiesContainer);

      //  Setup the game loop
      app.ticker.add(() => update());
    };

    await init();
  };

  return <Wrapper onContextCreate={onGLContextCreate} />;
};

export default GameRenderer;
