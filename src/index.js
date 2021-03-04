import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import { createStore, applyMiddleware,compose} from "redux"
import thunk from "redux-thunk"
import App from './App';
import taskReducer from './store/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store  = createStore(taskReducer, composeEnhancers(
     applyMiddleware(thunk)) 
    );
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
