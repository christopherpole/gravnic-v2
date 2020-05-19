import React from 'react';
import { registerRootComponent } from 'expo';

import App from '@/app';

//  eslint-disable-next-line no-console
console.disableYellowBox = true;

const Main = () => <App />;

export default registerRootComponent(Main);
