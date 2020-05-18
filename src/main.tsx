import React from 'react';
import { registerRootComponent } from 'expo';

import App from '@/app';

console.disableYellowBox = true;

const Main = () => <App />;

export default registerRootComponent(Main);
