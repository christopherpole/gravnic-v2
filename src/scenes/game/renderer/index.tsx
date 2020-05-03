import React, { useEffect, memo } from 'react';
import { ENTITIES } from 'gravnic-game';
import styled from 'styled-components';
import { PIXI } from 'expo-pixi';
import { GLView } from 'expo-gl';
import { useSelector, useDispatch } from 'react-redux';
import { DropShadowFilter } from '@pixi/filter-drop-shadow';

import IState from '@/types/state';
import {
  ENTITY_SIZE,
  ENTITY_MOVE_SPEED,
  ENTITY_FADE_SPEED,
  MAX_ENTITIES_COUNT,
  UNDOING_SPEED_MULTIPLIER,
  FAST_MODE_MULTIPLIER,
} from '@/config';
import { setEntitiesMoving, setLevelLoaded } from '@/actions/game';
import IEntityData from '@/types/entityData';
import getEntitiesDataFromGameState from '@/utils/getEntitiesDataFromGameState';
import blockImg from '@/assets/entities/floor.png';
import rainbowImg from '@/assets/entities/rainbow.png';
import glassImg from '@/assets/entities/glass.png';

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

interface ICurrentState {
  remainingEntitiesData: IEntityData[][];
  loaded: boolean;
  undoing: boolean;
  fastMode: boolean;
  initalized: boolean;
}

//  @FIXME - These needs to be kept here for it to work. What a mess
const currentState: ICurrentState = {
  remainingEntitiesData: [],
  loaded: false,
  undoing: false,
  fastMode: false,
  initalized: false,
};

const GameRenderer = () => {
  const gameStateHistory = useSelector(
    (state: IState) => state.game.gameStateHistory,
  );
  const levelLoaded = useSelector((state: IState) => state.game.levelLoaded);
  const undoing = useSelector((state: IState) => state.game.undoing);
  const currentLevel = useSelector(
    ({ game: { levels, selectedLevelIndex } }: IState) =>
      selectedLevelIndex !== null ? levels[selectedLevelIndex] : null,
  );
  const fastMode = useSelector((state: IState) => state.user.fastMode);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentLevel) {
      throw new Error('No level');
    }

    //  Get the most recent moves
    let gameStatesToAnimate = [
      ...gameStateHistory[gameStateHistory.length - 1],
    ];

    //  If we're undoing then reverse the array and add the last state of the previous move
    if (undoing) {
      const previousMove = gameStateHistory[gameStateHistory.length - 2];
      gameStatesToAnimate.reverse();
      gameStatesToAnimate.push(previousMove[previousMove.length - 1]);
    }
    //  If we've just stopped undoing then no need to animate the latest move
    else if (currentState.undoing && !undoing) {
      gameStatesToAnimate = [];
    }

    //  Convert new game state moves to entities data to animate
    currentState.loaded = levelLoaded;
    currentState.undoing = undoing;

    //  Convert the game states to entities data
    currentState.remainingEntitiesData = gameStatesToAnimate.map((gameState) =>
      getEntitiesDataFromGameState(gameState, currentLevel.colorScheme),
    );
  }, [levelLoaded, gameStateHistory, undoing, currentLevel]);

  useEffect(() => {
    currentState.fastMode = fastMode;
  }, [fastMode]);

  const onGLContextCreate = async (context: any) => {
    let entitySprites: ISprites;
    let app: typeof PIXI.Application;
    let entitiesContainer: typeof PIXI.Container;
    let textures: {
      [type: string]: typeof PIXI.Container;
    };

    /**
     * Load assets to be used for the game
     */
    const loadAssets = async () => {
      textures = {
        block: await PIXI.Texture.fromExpoAsync(blockImg),
        rainbow: await PIXI.Texture.fromExpoAsync(rainbowImg),
        glass: await PIXI.Texture.fromExpoAsync(glassImg),
      };
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
     * Renders the entities for the first time
     */
    const renderEntities = () => {
      if (!currentState.remainingEntitiesData.length) return;

      //  Remove any existing level from the stage
      app.stage.removeChild(entitiesContainer);
      entitySprites = {};

      //  Create container for the entities
      entitiesContainer = new PIXI.Container(MAX_ENTITIES_COUNT, {
        scale: false,
        position: false,
      });

      //  Draw the initial game state
      currentState.remainingEntitiesData[0].forEach((entityData) => {
        //  Create the sprite
        let entitySprite;

        if (entityData.type === ENTITIES.RAINBOW_BLOCK.id) {
          entitySprite = PIXI.Sprite.from(textures.rainbow);
        } else if (entityData.type === ENTITIES.GLASS.id) {
          entitySprite = PIXI.Sprite.from(textures.glass);
        } else {
          entitySprite = PIXI.Sprite.from(textures.block);
        }

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

      app.stage.addChild(entitiesContainer);
      resizeEntitiesContainer();

      //  Add the shadow
      const filter = new DropShadowFilter(undefined, 5, 5, undefined, 0.3);
      entitiesContainer.filters = [filter];
      dispatch(setLevelLoaded(true));
    };

    /**
     * The update loop
     */
    const update = () => {
      //  If the level isn't loaded then don't do anything
      if (!currentState.loaded) {
        renderEntities();
      }

      //  If there is no animations to perform then don't do anything
      if (!currentState.remainingEntitiesData.length) return;

      //  Move all of the entities where applicable
      let entitiesMoving = false;
      currentState.remainingEntitiesData[0].forEach((entityData) => {
        const currentEntitySprite = entitySprites[entityData.id];

        //  Undoing speed multiplier
        const moveSpeed =
          (currentState.fastMode ? FAST_MODE_MULTIPLIER : 1) *
          ENTITY_MOVE_SPEED *
          (currentState.undoing ? UNDOING_SPEED_MULTIPLIER : 1);
        const fadeSpeed =
          (currentState.fastMode ? FAST_MODE_MULTIPLIER : 1) *
          ENTITY_FADE_SPEED *
          (currentState.undoing ? UNDOING_SPEED_MULTIPLIER : 1);

        //  x-axis
        if (entityData.x > currentEntitySprite.x) {
          currentEntitySprite.x += moveSpeed;
          entitiesMoving = true;
        } else if (entityData.x < currentEntitySprite.x) {
          currentEntitySprite.x -= moveSpeed;
          entitiesMoving = true;
        }

        //  y-axis
        if (entityData.y < currentEntitySprite.y) {
          currentEntitySprite.y -= moveSpeed;
          entitiesMoving = true;
        } else if (entityData.y > currentEntitySprite.y) {
          currentEntitySprite.y += moveSpeed;
          entitiesMoving = true;
        }

        //  Opacity
        if (entityData.fading) {
          currentEntitySprite.alpha -=
            (fadeSpeed / ENTITY_SIZE) * (currentState.undoing ? -1 : 1);

          if (
            (!currentState.undoing && currentEntitySprite.alpha > 0) ||
            (currentState.undoing && currentEntitySprite.alpha < 1)
          ) {
            entitiesMoving = true;
          }
        }
      });

      //  If entities have stopped moving then remove the current move from the stack
      if (!entitiesMoving) {
        currentState.remainingEntitiesData.shift();
        update();
      }

      //  If there's nothing left to animate then allow moves again
      if (currentState.remainingEntitiesData.length === 0) {
        dispatch(setEntitiesMoving(false));
      }
    };

    /**
     * Init the game
     */
    const init = async () => {
      if (currentState.initalized) return;

      //  Create the Pixi application
      app = new PIXI.Application({
        context,
        antialias: true,
        resolution: 1,
        transparent: true,
      });

      //  Load in any assets required
      await loadAssets();

      //  Render the entities onto the stage
      renderEntities();

      //  Setup the game loop
      app.ticker.add(() => update());

      currentState.initalized = true;
    };

    await init();
  };

  return <Wrapper onContextCreate={onGLContextCreate} />;
};

export default memo(GameRenderer);
