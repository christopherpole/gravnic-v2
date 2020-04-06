declare module 'expo-pixi';

declare module 'gravnic-game';

declare module 'react-native-swipe-gestures' {
  const { swipeDirections } = require('gravnic-game');

  type SwipeDirections =
    | swipeDirections.SWIPE_UP
    | swipeDirections.SWIPE_RIGHT
    | swipeDirections.SWIPE_LEFT
    | swipeDirections.SWIPE_DOWN;
}

declare module '*.png';
