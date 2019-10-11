import React from 'react';
import * as reducers from "./state/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { combineReducers } from "redux";

import './App.css';
import Counter from './components/Counter';



function App() {
  const rootReducer = combineReducers({
    count: reducers.randomReducer
  })
  
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  // console.log(store);
  
  return (
  <Provider store={store} >
      <div className="App">
     <Counter a={""} />
    </div>
  </Provider>
  );
}

export default App;
