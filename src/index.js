import React from 'react';
import ReactDOM from 'react-dom/client';
// import Home from './todo-list/Home';
// import Ui from './Captcha/Ui';
import str from'./Slider/Store'
import { Provider } from 'react-redux';
import Home from './Slider/Home';
// import Home from './dummy/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   // <h1>hello world</h1>
 <>
  <Provider store={str}>  
   {/* <Ui/> */}
   <Home/>
  </Provider>
  </>
  );

