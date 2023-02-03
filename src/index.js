import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux'

import App from './App';

const store = createStore(rootReducer)

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
