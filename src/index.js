import React from 'react';
import ReactDOM from 'react-dom';
import App from './Main/App/App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import reducer from "./Main/Reducers/Cart";
import {Provider} from "react-redux";

const persistedState = localStorage.getItem('cart')
                       ? JSON.parse(localStorage.getItem('cart'))
                       : {cart : {}}

const store = createStore(reducer, persistedState);

store.subscribe(()=>{
  localStorage.setItem('cart', JSON.stringify(store.getState()))
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
