import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './todo-list/Home';
import {store} from'./todo-list/Store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   // <h1>hello world</h1>
 <>
  <Provider store={store}>   <Home/>
  </Provider>
  </>
  );

