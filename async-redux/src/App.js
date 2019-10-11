import React from 'react';
import thunk from 'redux-thunk';
import * as reducers from "./state/reducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";


import './App.css';
import Counter from './components/Counter';
import PlayerList from './components/PlayerList';



function App() {
  const rootReducer = combineReducers({
    count: reducers.randomReducer,
    players: reducers.playersReducer,
  })
  
  const store = createStore(
    rootReducer,
    {},
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );

  // console.log(store);
  
  return (
  <Provider store={store} >
      <div className="App">
     <Counter a={""} />
     <PlayerList />
    </div>
  </Provider>
  );
}

export default App;
