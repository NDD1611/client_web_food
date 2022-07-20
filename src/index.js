import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";


//learn_redux
import store, { persistor } from "./redux/redux.js"
import { Provider } from "react-redux"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App persistor={persistor} />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
