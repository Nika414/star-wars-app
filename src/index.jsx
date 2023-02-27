import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './store/store';
import App from './Components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter basename="/">
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
);
