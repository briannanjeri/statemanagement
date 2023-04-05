import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {legacy_createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers'

const store=legacy_createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(
  <Provider store={ store}>
  <App />
  </Provider>,
  document.getElementById('root')
);


















// //STORE


// //ACTION INCREMENT

// const increment=()=>{
//   return { 
//     type:'INCREMENT'
//   }
// }

// //ACTION DECREMENT


// const decrement=()=>{
//   return { 
//     type:'DECREMENT'
//   }
// }

// //REDUCER

// const counter=(state=0, action)=>{
//    switch(action.type){
//     case "INCREMENT":
//       return state+=1;

//     case "DECREMENT":
//       return state-=1
//    }
   

// };

// let store=legacy_createStore(counter)
// store.subscribe(()=> console.log(store.getState()));
// //DISPAlcreateStoreTCH
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());



