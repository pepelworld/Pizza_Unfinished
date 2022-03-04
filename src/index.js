import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './App';
import {BrowserRouter as Routes} from 'react-router-dom';
import store from'./redux/store';
import {Provider} from 'react-redux';



ReactDOM.render(
    <Routes>
      <Provider store={store}>
        <App />
      </Provider>
    </Routes>,
  document.getElementById('root')
);

