import React from 'react';
import ReactDOM from 'react-dom';
import App from './Main/App/App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import reducer from "./Main/Reducers/Cart";
import {Provider} from "react-redux";

let CryptoJS = require("crypto-js");


const persistedState = {cart : {}}
if (localStorage.getItem('cart'))
    try{
        JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('cart').toString(),"klndfgnuwie").toString(CryptoJS.enc.Utf8))
    }catch(err){

    }



const store = createStore(reducer, persistedState);

store.subscribe(()=>{
  localStorage.setItem('cart', CryptoJS.AES.encrypt(store.getState().toString(), "klndfgnuwie").toString())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
