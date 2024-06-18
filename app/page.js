// App.js
"use client"
import React from 'react';
import { Provider } from 'react-redux';


import store from './store';
import Calculator from './Calculator';




function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Calculator</h1>
        <Calculator/>
      </div>
    </Provider>
  );
}

export default App;
