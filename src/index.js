import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Phonebook">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
