import React from 'react';
import styled from 'styled-components';
import { PIXI } from 'expo-pixi';
import { GLView } from 'expo-gl';

import { ENTITIES_DATA } from '@/config';
import entities from '@/assets/entities.png';

const Wrapper = styled(GLView)`
  aspect-ratio: 1;
  width: 100%;
`;

const GameRenderer = () => (
  <Wrapper
    onContextCreate={async (context) => {
      const app = new PIXI.Application({
        context,
        antialias: true,
        resolution: 1,
        transparent: true,
      });

      const texture = await PIXI.Texture.fromExpoAsync(entities);
      const entitiesContainer = new PIXI.Container(99999, {
        scale: false,
        position: false,
      });
      let sprite;

      ENTITIES_DATA.forEach((entityRowData, i) => {
        entityRowData.forEach(async (entityData, j) => {
          if (entityData.staticEntity) {
            sprite = PIXI.Sprite.from(texture);

            sprite.height = 150;
            sprite.width = 150;
            sprite.x = j * 150;
            sprite.y = i * 150;
            entitiesContainer.addChild(sprite);
          }

          if (entityData.movableEntity) {
            sprite = PIXI.Sprite.from(texture);

            sprite.height = 150;
            sprite.width = 150;
            sprite.x = j * 150;
            sprite.y = i * 150;

            if (entityData.movableEntity.color) {
              sprite.tint = entityData.movableEntity.color.replace('#', '0x');
            }

            entitiesContainer.addChild(sprite);
          }
        });
      });

      //  Resize the entities container so that it fits on the screen
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

      app.stage.addChild(entitiesContainer);
    }}
  />
);

export default GameRenderer;
