//  Swiping
export const SWIPE_VELOCITY_THRESHOLD = 0.3;
export const DIRECTIONAL_OFFSET_THRESHOLD = 80;

//  Game renderer
export const MAX_ENTITIES_COUNT = 200;
export const ENTITY_SIZE = 120;
export const ENTITY_MOVE_SPEED = ENTITY_SIZE / 4;
export const ENTITY_FADE_SPEED = ENTITY_MOVE_SPEED / 6; //  Lower is slower relative to move speed
export const UNDOING_SPEED_MULTIPLIER = 2; //  Multiply other animation speeds with this number when undoing
export const FAST_MODE_MULTIPLIER = 2; //  All animations are multiplied by this number for fast mode
