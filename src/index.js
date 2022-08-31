import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Use Provider As Wrapper Components
import { Provider } from 'react-redux';
// Use Redux Store And Send It As An Attr To Provider
import {store} from './redux/store';
// Use Router
import {BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

