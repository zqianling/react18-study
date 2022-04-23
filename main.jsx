import React from 'react';
import {createRoot} from 'react-dom/client';
import OldBatchUpdate from './src/pages/OldBatchUpdate';
import BatchUpdate from './src/pages/BatchUpdate';
import { render } from 'react-dom';
import SuspensePage from './src/pages/SuspensePage';
import StartTransition from './src/pages/StartTranstion';
import UpdatePriority from './src/pages/UpdatePriority';
import UseDeferredValuePage from './src/pages/UseDeferredValuePage';
import UseTransitionPage from './src/pages/UseTransitionPage'
import UseSyncExternalStorePage from './src/pages/UseSyncExternalStorePage';
import UseInsertionEffectPage from './src/pages/UseInsertionEffectPage';
const root = document.querySelector('#root');
// const element = <OldBatchUpdate />;
const element = <UseInsertionEffectPage />;

createRoot(root).render(element);
// render(element, root);