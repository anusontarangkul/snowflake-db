import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DatabaseContext from './context/DatabaseContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DatabaseContext>
      <App />
    </DatabaseContext>
  </React.StrictMode>
);

